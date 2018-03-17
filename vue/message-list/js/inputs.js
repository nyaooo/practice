Vue.component('name-input', {
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        value() {
            this.updateValue();
        }
    },
    render(h) {
        var _this = this;

        return h('div', {
            class: [
                'input-group',
                'mb-3'
            ]
        }, [
            h('div', {
                class: 'input-group-prepend'
            }, [
                h('span', {
                    class: 'input-group-text'
                }, '昵称：')
            ]),
            h('input', {
                attrs: {
                    type: 'text',
                },
                domProps: {
                    value: this.currentValue
                },
                class: 'form-control',
                on: {
                    input: function (e) {
                        _this.currentValue = e.target.value;
                        _this.$emit('input', e.target.value);
                    }
                }
            })
        ])
    },
    methods: {
        updateValue() {
            this.currentValue = this.value;
        }
    }
});

Vue.component('msg-input', {
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        value() {
            this.updateValue()
        }
    },
    render(h) {
        var _this = this;

        return h('div', {
            class: [
                'input-group',
                'mb-3'
            ]
        }, [
            h('div', {
                class: 'input-group-prepend'
            }, [
                h('span', {
                    class: 'input-group-text'
                }, '留言内容：')
            ]),
            h('textarea', {
                class: 'form-control',
                attrs: {
                    placeholder: '请输入留言内容',
                },
                domProps: {
                    value: this.currentValue
                },
                ref: 'messageContent',
                on: {
                    input: function (e) {
                        _this.currentValue = e.target.value;
                        _this.$emit('input', e.target.value);
                    }
                }
            })
        ])
    },
    methods: {
        updateValue() {
            this.currentValue = this.value;
        },
        handleFocus() {
            this.$refs.messageContent.focus();
        }
    }
})