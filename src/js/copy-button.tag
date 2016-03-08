<copy-button>
    <span class="btn btn-default btn-xs" onclick="{ copy }">
        copy code
    </span>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        var ChannelManager = require('./channel-manager.js'),
            channelInstance = ChannelManager.subscribe(opts.channel),
            clipboard;

        this.copy = function () {
            channelInstance.trigger(
                'COPY_ACTION',
                {
                    id: opts.id
                }
            );
        };

        this.on('mount', function () {
            clipboard = new Clipboard(this.root, {
                target: function(trigger) {
                    return document.querySelectorAll('pre code')[0];
                }
            });
        });

        this.on('unmount', function () {
            //channelInstance.off('*');
        });
    </script>
</copy-button>