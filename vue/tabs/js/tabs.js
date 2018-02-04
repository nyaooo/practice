Vue.component('tabs', {
    template: `\
    <div class="tabs">\
        <div class="tabs-bar">\
            <div :class="tabClass(item)"\
                v-for="(item, index) in navList"\
                @click="handleChangeNav(index)">\
                {{ item.label }}\
            </div>\
        </div>\
        <div class="tabs-content">\
            <slot></slot>\
        </div>\
    </div>`,
    props: {
        value: {
            type: [String, Number]
        }
    },
    data() {
        return {
            currentNav: this.value,
            navList: []
        }
    },
    watch: {
        value(newVal) {
            this.currentNav = newVal;
        },
        currentNav() {
            // 当前选中的tab发生改变，更新pane的显示状态
            this.updateStatus();
        }
    },
    methods: {
        getTabs() {
            return this.$children.filter((item) => {
                return item.$options.name === 'pane'
            })
        },
        updateNav() {
            var _this = this;
            this.navList = [];

            this.getTabs().forEach((pane, index) => {
                _this.navList.push({
                    label: pane.label,
                    name: pane.name || index
                })
                // 没有设置name，就把index赋给name
                if (!pane.name) pane.name = index;
                // 设置默认选中的nav
                if (index === 0) {
                    if (!_this.currentNav) {
                        _this.currentNav = pane.name;
                    }
                }
            });

            this.updateStatus();
        },
        updateStatus() {
            var _this = this,
                tabs = this.getTabs();

            tabs.forEach((item) => {
                return item.show = item.name === _this.currentNav;
            })
        },
        tabClass(item) {
            return [
                'tabs-tab',
                {
                    'tabs-tab-active': item.name === this.currentNav
                }
            ]
        },
        handleChangeNav(index) {
            var _name = this.navList[index].name;

            this.currentNav = _name;
            this.$emit('input', _name);
            // this.$emit('on-click', name);
        }
    }
})