var riot = require('riot'),
    ChannelListSingleton = {};

module.exports = {
    subscribe: function (channelName) {
        var ChannelFactory,instance;

        // if channel does not exist create one
        if (!ChannelListSingleton[channelName]) {
            ChannelFactory = function () {
                riot.observable(this)
            };

            instance = new ChannelFactory();

            ChannelListSingleton[channelName] = instance;
        }

        // return channel reference
        return ChannelListSingleton[channelName];
    }
};