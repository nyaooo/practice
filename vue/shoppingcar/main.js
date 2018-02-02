var app = new Vue({
    el: '#app',
    data: {
        list: [
            [{
                    id: '01',
                    type: '电子产品',
                    name: 'iPhone X',
                    price: 9688,
                    count: 0,
                    chose: false
                },
                {
                    id: '02',
                    type: '电子产品',
                    name: 'Macbook Pro',
                    price: 13888,
                    count: 0,
                    chose: false
                },
                {
                    id: '03',
                    type: '电子产品',
                    name: 'Apple Watch',
                    price: 2488,
                    count: 0,
                    chose: false
                }
            ],
            [{
                id: '11',
                type: '生活用品',
                name: '牙刷',
                price: 12,
                count: 0,
                chose: false
            }, {
                id: '12',
                type: '生活用品',
                name: '毛巾',
                price: 20,
                count: 0,
                chose: false
            }],
            [{
                id: '21',
                type: '水果',
                name: '苹果',
                price: 5.6,
                count: 0,
                chose: false
            }, {
                id: '22',
                type: '水果',
                name: '桔子',
                price: 3.4,
                count: 0,
                chose: false
            }, {
                id: '23',
                type: '水果',
                name: '香蕉',
                price: 3.5,
                count: 0,
                chose: false
            }]
        ],
        allChose: false
    },
    methods: {
        goodReduce: function (id, index) {
            var [i] = id.split(''),
                j = index;
            if (this.list[i][j].count === 0) {
                if (confirm('商品“' + this.list[i][j].name + '”数量不能再减少，要将它移除吗？'))
                    this.list[i].splice(j, 1);
                return
            } else {
                this.list[i][j].chose = true;
                this.list[i][j].count--;
                this.list[i][j].chose = this.list[i][j].count == 0 ? false : this.list[i][j].chose;
            }
        },
        goodAdd: function (id, index) {
            // 商品id解构为二维数组索引
            var [i] = id.split(''),
                j = index;
            this.list[i][j].chose = true;
            this.list[i][j].count++;
        },
        goodRemove: function (id, index) {
            var [i] = id.split(''),
                j = index;
            if (confirm('是否移除商品“' + this.list[i][j].name + '”'))
                this.list[i].splice(j, 1);
        },
        chooseOne: function (id, index) {
            var [i] = id.split(''),
                j = index,
                _checked = event.target.checked;
            this.list[i][j].count = event.target.checked ? 1 : 0;
            this.list[i][j].chose = _checked;
        },
        chooseAll: function () {
            this.allChose = !this.allChose;
            if (this.allChose == true) {
                this.list.forEach(items => {
                    items.forEach((item) => {
                        item.chose = true;
                        item.count = item.count === 0 ? 1 : item.count;
                    })
                });
            } else {
                this.list.forEach(items => {
                    items.forEach((item) => {
                        item.chose = false;
                    })
                });
            }
        }
    },
    computed: {
        totalPrice: function () {
            var sum = 0;
            this.list.forEach((items, i) => {
                items.forEach((item, j) => {
                    if (this.list[i][j].chose) {
                        sum += this.list[i][j].price * this.list[i][j].count;
                    }
                })
            })
            /* for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].chose) {
                    sum += this.list[i].price * this.list[i].count;
                }
            } */
            return sum.toFixed(2);
        }
    }
})