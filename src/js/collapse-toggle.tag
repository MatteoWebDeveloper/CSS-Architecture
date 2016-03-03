<collapse-toggle-button>
    <span>Hello world</span>
    <span if={ !toggleState } class="btn btn-default btn-xs">{opt.message} show code</span>
    <span if={ toggleState }>hide code</span>

    <style scoped>
        /* css */
        :scope { display: block }
    </style>

    <script>
        // javascript
        alert('running');

        this.toggleState = true;
    </script>
</collapse-toggle-button>