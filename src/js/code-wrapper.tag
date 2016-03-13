<code-wrapper>
    raw: { isOpen }<br>
    filter:{ Filters(isOpen) }
    <div class={ t_collapse: !isOpen }>
        <yield/>
    </div>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        var
            self = this,
            ChannelManager = require('./channel-manager.js'),
            Events = require('./events.js'),
            Filters = require('./filters.js'),
            channelInstance = ChannelManager.subscribe(opts.channel),
            isOpenBool = opts.open === 'true' | false;
        ;

        this.Filters = Filters;

        this.isOpen = isOpenBool;

        // events
        channelInstance.on(
            Events.TOGGLE_CHANGE,
            function(data) {
                if (opts.id == data.id) {
                    self.update({ isOpen: data.status });
                }
            }
        );

        this.on('mount', function(e){

        });

        this.on('unmount', function () {
            //channelInstance.off('*');
        });
    </script>
</code-wrapper>