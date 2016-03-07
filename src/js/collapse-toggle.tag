<collapse-toggle-button>
    <span class="btn btn-default btn-xs">
        {toggleState}
        <span if={ toggleState } onclick="{ toogle }">show code</span>
        <span if={ !toggleState } onclick="{ toogle }">hide code</span>
    </span>

    <style scoped>
        :scope { display: block }
    </style>

    <script>
        this.toggleState = true;

        this.toogle = function (e) {
            this.toggleState = !this.toggleState;
        };
    </script>
</collapse-toggle-button>