Vue.component('pane', {
    name: 'pane',
    template: '\
    <div class="tabs-pane" v-show="show">\
        <slot></slot>\
    </div>',
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            show: false
        }
    },
    watch: {
        label() {
            this.updateNav();
        }
    },
    methods: {
        updateNav() {
            this.$parent.updateNav();
        },
    },
    mounted() {
        this.updateNav();
    }
})