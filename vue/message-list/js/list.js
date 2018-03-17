Vue.component('msg-list', {
    props: {
        list: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    render(h) {
        var _list = [];
        var _this = this;

        this.list.forEach((item, index) => {
            var msgItem = h('div', {
                class: [
                    'row', 'clearfix', 'mb-3', 'pb-2', 'border-bottom'
                ]
            }, [
                h('div', {
                    class: 'col-1'
                }, [
                    h('span', {
                        class: [
                            'text-success',
                            'font-weight-bold'
                        ]
                    }, item.name + '：')
                ]),
                h('div', {
                    class: 'col-11'
                }, [
                    h('p', item.message),
                    h('a', {
                        class: [
                            'p-2', 'text-success', 'float-right', 'pointer'
                        ],
                        on: {
                            click: function () {
                                _this.reply(index);
                            }
                        }
                    }, '回复'),
                    h('a', {
                        class: [
                            'p-2', 'text-muted', 'float-right', 'pointer'
                        ],
                        on: {
                            click: function () {
                                _this.delete(index);
                            }
                        }
                    }, '删除')
                ])
            ]);
            _list.push(msgItem);
        });

        if (this.list.length) {
            return h('div', {
                class: 'container'
            }, _list)
        } else {
            return h('div', {
                class: [
                    'container',
                    'text-muted'
                ]
            }, '留言列表为空')
        }
    },
    methods: {
        reply(index) {
            this.$emit('reply', index);
        },
        delete(index) {
            this.$emit('delete', index);
        }
    }
})