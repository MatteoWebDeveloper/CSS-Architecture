<toggle-button>
    <span class="btn btn-default btn-xs" onclick="{ toggle }">
        <span if={ toggleState } >show code</span>
        <span if={ !toggleState } >hide code</span>
    </span>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        var
            self = this,
            ChannelManager = require('./channel-manager.js'),
            channelInstance = ChannelManager.subscribe(opts.channel);

        this.toggleState = true;

        this.toggle = function (e) {
            this.toggleState = !this.toggleState;

            channelInstance.trigger(
                'TOGGLE_CHANGE',
                {
                    id: opts.id,
                    status: self.toggleState
                }
            );
        };

        // events
        this.on('unmount', function () {
            //channelInstance.off('*');
        });
    </script>
</toggle-button>