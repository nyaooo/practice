var app = new Vue({
    el: '#app',
    data: {
        list: [{
                id: 1,
                name: 'iPhone X',
                price: 9688,
                count: 0,
                chose: false
            },
            {
                id: 2,
                name: 'Macbook Pro',
                price: 13888,
                count: 0,
                chose: false
            },
            {
                id: 3,
                name: 'Apple Watch',
                price: 2488,
                count: 0,
                chose: false
            }
        ],
        allChose: false
    },
    methods: {
        goodReduce: function (index) {
            if (this.list[index].count === 0) {
                if (confirm('商品“' + this.list[index].name + '”数量不能再减少，要将它移除吗？'))
                    this.list.splice(index, 1);
                return
            } else {
                this.list[index].chose = true;
                this.list[index].count--;
                this.list[index].chose = this.list[index].count == 0 ? false : this.list[index].chose;
            }
        },
        goodAdd: function (index) {
            this.list[index].chose = true;
            this.list[index].count++;
        },
        goodRemove: function (index) {
            if (confirm('是否移除商品“' + this.list[index].name + '”'))
                this.list.splice(index, 1);
        },
        chooseAll: function () {
            this.allChose = !this.allChose;
            if (this.allChose == true) {
                this.list.forEach(item => {
                    item.chose = true;
                    item.count = item.count === 0 ? 1 : item.count;
                });
            } else {
                this.list.forEach(item => {
                    item.chose = false;
                });
            }
        }
    },
    computed: {
        totalPrice: function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].chose) {
                    sum += this.list[i].price * this.list[i].count;
                }
            }
            return sum;
        }
    }
})