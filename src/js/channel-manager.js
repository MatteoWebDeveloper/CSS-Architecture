var riot = require('riot'),
    ChannelListSingleton = {};

module.exports = {
    subscribe: function (channelName) {
        var ChannelFactory,instance;

        // if channel does not exist create one
        if (!ChannelListSingleton[channelName]) {
            ChannelFactory = function () {
                riot.observable(this)

                this.initCount = 0;

                this.init = function () {
                    this.initCount++;

                    console.log(this.initCount,this.subscritionCount);

                    if (this.initCount == this.subscritionCount) {
                        this.trigger('INIT');
                        console.log('Channel-manager:Event:Trigger:INIT');
                    }
                };
            };

            instance = new ChannelFactory();

            ChannelListSingleton[channelName] = instance;

            instance.subscritionCount = 1
        }
        // return reference
        else {
            instance = ChannelListSingleton[channelName];
            instance.subscritionCount++;
        }

        console.log('Channel-manager:ChannelCreated:'+channelName,instance.subscritionCount);

        // return channel reference
        return ChannelListSingleton[channelName];
    }
};