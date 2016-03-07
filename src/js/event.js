var ChannelSingleton = {};

module.exports = {
    subscribe: function (channelName) {

        // create if not defined
        if (!ChannelSingleton[channelName]) {
            ChannelSingleton[channelName] = {};
        }

        // retunr reference
        return ChannelSingleton[channelName];
    }
};