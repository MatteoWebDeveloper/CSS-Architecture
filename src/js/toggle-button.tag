<toggle-button>
    <span class="btn btn-default btn-xs" onclick="{ toogle }">
        <span if={ toggleState } >show code</span>
        <span if={ !toggleState } >hide code</span>
    </span>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        var ChannelManager = require('./channel-manager.js'),
            channelInstance = ChannelManager.subscribe(opts.channel);

        this.toggleState = true;

        this.toogle = function (e) {
            this.toggleState = !this.toggleState;

            channelInstance.trigger(
                'TOGGLE_CHANGE',
                {
                    id: opts.id,
                    status: this.toggleState,
                }
            );
        };

        // init
        //this.toogle();

        // events
        this.on('unmount', function () {
            //channelInstance.off('*');
        });
    </script>
</toggle-button>