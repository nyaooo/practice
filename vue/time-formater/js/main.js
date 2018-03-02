const app = new Vue({
    el: '#app',
    data: {
        timeNow: (new Date().getTime()),
        timeHoursBefore: 1519938122000,
        timeDaysBefore: 1517803322000,
        timeMouthsBefore: 1514062922000
    },
    computed: {
        timeSecondsBefore: function () {
            return this.timeNow - 15000;
        },
        timeMinutesBefore: function () {
            return this.timeNow - 120000;
        }
    },
    directives: {
        time: {
            bind: function (el, binding) {
                el.innerHTML = Time.getFormatDate(binding.value)
                el.__timeout__ = setInterval(function () {
                    el.innerHTML = Time.getFormatDate(binding.value)
                }, 60000)
            },
            unbind: function (el) {
                clearInterval(el.__timeout__)
                delete el.__timeout__
            }
        }
    }
})