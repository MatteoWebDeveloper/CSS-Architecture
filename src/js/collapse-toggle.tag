<collapse-toggle-button>
    <span class="btn btn-default btn-xs">
        <span if={ !toggleState }>show code</span>
        <span if={ !toggleState }>hide code</span>
    </span>

    <style scoped>
        /* css */
        :scope { display: block }
    </style>

    <script>
        // javascript
        console.log('running');

        this.toggleState = true;
    </script>
</collapse-toggle-button>