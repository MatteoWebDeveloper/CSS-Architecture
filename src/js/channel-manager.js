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

            ChannelListSingleton[channelName]['count'] = 0
        }

        // count listener
        ChannelListSingleton[channelName]['count'] += ChannelListSingleton[channelName]['count'];

        // return channel reference
        return ChannelListSingleton[channelName];
    }
};