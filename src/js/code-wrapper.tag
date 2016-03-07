<code-wrapper>
    <div class={ t_collapse: !toggleState }>
        <yield/>
    </div>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        var HtmlToTextFactory = require('./html-to-text.js'),
            htmlToText = new HtmlToTextFactory();

        this.toggleState = true;

        this.on('mount', function(e){

            var code = this.root.querySelector('pre code');

            htmlToText.init(code);

            console.log('event:code-wrapper');
        });
    </script>
</code-wrapper>