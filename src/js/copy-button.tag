<copy-button>
    <span class="btn btn-default btn-xs" onclick="{ copy }">
        copy code
    </span>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        this.copy = function (e) {
            console.log('event:copy-button',e);
        };
    </script>
</copy-button>