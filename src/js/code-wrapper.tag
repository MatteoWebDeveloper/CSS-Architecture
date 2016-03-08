<code-wrapper>
    <div class={ t_collapse: isCollapse }>
        <yield/>
    </div>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        var
            self = this,
            ChannelManager = require('./channel-manager.js'),
            Filters = require('./filters.js'),
            HtmlToTextFactory = require('./html-to-text.js'),
            channelInstance = ChannelManager.subscribe(opts.channel),
            htmlToText = new HtmlToTextFactory();

        this.Filters = Filters;

        this.isCollapse = null;

        // events
        channelInstance.on('TOGGLE_CHANGE', function(data) {
            if (opts.id == data.id) {
                self.update({ isCollapse: data.status });
            }
        });

        this.on('mount', function(e){
            var code = this.root.querySelector('pre code');
            htmlToText.init(code);

            channelInstance.trigger('INIT_MOUNT');
        });

        this.on('unmount', function () {
            //channelInstance.off('*');
        });
    </script>
</code-wrapper>