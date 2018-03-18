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
    template: `
    <div class='input-group mb-3'>
        <div class='input-group-prepend'>
            <span class='input-group-text'>昵称：</span>
        </div>
        <input type='text' class='form-control' :value='this.currentValue' @input='handleInput'>
    </div>
    `,
    /* render(h) {
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
    }, */
    methods: {
        updateValue() {
            this.currentValue = this.value;
        },
        handleInput() {
            this.currentValue = event.target.value;
            this.$emit('input', event.target.value);
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
    template: `
    <div class='input-group mb-3'>
        <div class='input-group-prepend'>
            <span class='input-group-text'>留言内容：</span>
        </div>
        <textarea class='form-control' 
                placeholder='请输入留言内容' 
                ref='messageContent' 
                :value='this.currentValue'
                @input='handleInput'></textarea>
    </div>
    `,
    /* render(h) {
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
    }, */
    methods: {
        updateValue() {
            this.currentValue = this.value;
        },
        handleFocus() {
            this.$refs.messageContent.focus();
        },
        handleInput() {
            this.currentValue = event.target.value;
            this.$emit('input', event.target.value);
        }
    }
})