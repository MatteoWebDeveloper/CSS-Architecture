<code-wrapper>
    <div class={ t_collapse: isCollapse }>
        <yield/>
    </div>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        var
            ChannelManager = require('./event.js'),
            HtmlToTextFactory = require('./html-to-text.js'),

            channelInstance = ChannelManager.subscribe(opts.channel),
            htmlToText = new HtmlToTextFactory();

        this.isCollapse = false;

        this.on('mount', function(e){
            var code = this.root.querySelector('pre code');
            htmlToText.init(code);
        });
    </script>
</code-wrapper>