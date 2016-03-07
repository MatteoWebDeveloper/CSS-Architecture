<toggle-button>
    <span class="btn btn-default btn-xs">
        <span onclick="{ toogle }">
            <span if={ toggleState } >show code</span>
            <span if={ !toggleState } >hide code</span>
        </span>
    </span>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        var ChannelManager = require('./event.js'),
            channelInstance = ChannelManager.subscribe(opts.channel);

        this.toggleState = true;

        this.toogle = function (e) {
            this.toggleState = !this.toggleState;

            channelInstance.prop = 1;

            console.log('event:toggle-button',e);
            debugger;
        };
    </script>
</toggle-button>