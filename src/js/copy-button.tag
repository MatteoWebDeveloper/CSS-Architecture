<copy-button>
    <span class="btn btn-default btn-xs" onclick="{ copy }">
        copy code
    </span>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        var ChannelManager = require('./channel-manager.js');

        this.copy = function (e) {};

        this.on('unmount', function () {
            //channelInstance.off('*');
        });
    </script>
</copy-button>