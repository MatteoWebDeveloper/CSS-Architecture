<copy-button>
    <span class="btn btn-default btn-xs" onclick="{ copy }">
        copy code
    </span>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        var ChannelManager = require('./event.js'),
            channelInstance = ChannelManager.subscribe(opts.channel);

        this.copy = function (e) {
            console.log('event:copy-button',e, ciao);

            channelInstance.prop = 1;

            debugger;
        };
    </script>
</copy-button>