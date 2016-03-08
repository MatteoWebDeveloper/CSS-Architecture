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
            htmlToText = new HtmlToTextFactory(),
            code;

        this.Filters = Filters;

        this.isCollapse = null;

        // events
        channelInstance.on('TOGGLE_CHANGE', function(data) {
            if (opts.id == data.id) {
                self.update({ isCollapse: data.status });
            }
        });

        // channelInstance.on('COPY_ACTION', function(data) {
        //     if (opts.id == data.id) {
        //
        //     }
        // });

        this.on('mount', function(e){
            code = this.root.querySelector('pre code');
            htmlToText.init(code);
        });

        this.on('unmount', function () {
            //channelInstance.off('*');
        });
    </script>
</code-wrapper>