function isNumber (value) {
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '');
}

Vue.component('input-number', {
    template: '\
    <div class="number">\
        <input type="text"\
            :value="currentValue"\
            @change="handleChange"\
            @keydown.+="handleValueAdd"\
            @keydown.-="handleValueReduce">\
        <button @click="handleValueAdd"\
                :disabled="currentValue >= max">+</button>\
        <button @click="handleValueReduce"\
                :disabled="currentValue <= min">-</button>\
    </div>',
    props: {
        value: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        step: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        currentValue: function (newVal) {
            this.$emit('input', newVal);
        },
        value: function (newValue) {
            this.updateValue(newValue);
        }
    },
    methods: {
        updateValue: function (val) {
            // 数值发生变化，进行过滤
            if (val > this.max) {
                val = this.max;
            }
            if (val < this.min) {
                val = this.min;
            }
            this.currentValue = val;
        },
        handleValueAdd: function () {
            this.updateValue(this.currentValue += this.step);
        },
        handleValueReduce: function () {
            this.updateValue(this.currentValue -= this.step);
        },
        handleChange: function () {
            var val = event.target.value.trim();
            console.log(isNumber(val))
            if (isNumber(val)) {
                // 正则判断是数值后，更新currentVaule
                val = Number(val);
                this.updateValue(val);
            } else {
                event.target.value = this.currentValue;
            }
        }
    },
    mounted: function () {
        // 初次挂载，要检验从父组件传来的value
        this.updateValue(this.value);
    }
})