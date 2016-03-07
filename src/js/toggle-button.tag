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
        this.toggleState = true;

        this.toogle = function (e) {
            this.toggleState = !this.toggleState;
            console.log('event:toggle-button',e);
        };
    </script>
</toggle-button>