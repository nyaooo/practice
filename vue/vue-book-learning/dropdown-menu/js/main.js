const app = new Vue({
    el: '#app',
    data: {
        show: false
    },
    methods: {
        handleClose() {
            this.show = false;
        }
    },
    directives: {
        clickoutside: {
            bind: (el, binding) => {
                var clickOutside = (e) => {
                    if (el.contains(e.target)) {
                        return false;
                    }
                    if (binding.expression) {
                        binding.value(e);
                    }
                }
                var keyupEsc = (e) => {
                    // 按ESC关闭下拉
                    /* if (e.keyCode === 27) {
                        binding.value(e);
                    } */
                    // 可选（带esc修饰符则）
                    if (binding.modifiers.esc) {
                        binding.value(e);
                    }
                }
                el.__vueClickOutside__ = clickOutside;
                el.__vueKeyupEsc__ = keyupEsc;
                document.addEventListener('click', el.__vueClickOutside__);
                document.addEventListener('keyup', el.__vueKeyupEsc__);
            },
            unbind: (el, binding) => {
                document.removeEventListener('click', el.__vueClickOutside__);
                document.removeEventListener('keyup', el.__vueKeyupEsc__);
                delete el.__vueClickOutside__;
                delete el.__vueKeyupEsc__;
            }
        }
    }
})