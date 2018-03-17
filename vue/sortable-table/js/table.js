Vue.component('s-table', {
    props: {
        data: {
            type: Array,
            default: () => {
                return [];
            }
        },
        columns: {
            type: Array,
            default: () => {
                return [];
            }
        },
        colsWidth: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data: function () {
        return {
            currentData: [],
            currentColumns: [],
            currentColsWidth: []
        }
    },
    render: function (h) {
        var _this = this;
        var ths = [];
        this.currentColumns.forEach((col, index) => {
            if (col.sortable) {
                ths.push(h('th', [
                    h('span', col.title),
                    h('a', {
                        class: {
                            sorted: col._sortType === 'asc'
                        },
                        on: {
                            click() {
                                _this.handleSortByAsc(index);
                            }
                        }
                    }, '↑'),
                    h('a', {
                        class: {
                            sorted: col._sortType === 'desc'
                        },
                        on: {
                            click() {
                                _this.handleSortByDesc(index);
                            }
                        }
                    }, '↓')
                ]))
            } else {
                ths.push(h('th', col.title));
            }
        });

        var trs = [];
        this.currentData.forEach((row, index) => {
            var tds = [];
            _this.currentColumns.forEach((cell) => {
                tds.push(h('td', row[cell.key]));
            });
            trs.push(h('tr', tds));
        });
        var cols = [];
        this.currentColsWidth.forEach((item) => {
            cols.push(
                h('col', {
                    attrs: {
                        width: item
                    }
                })
            )
        })

        return h('table', [
            h('colgroup', cols),
            h('thead', [
                h('tr', ths)
            ]),
            h('tbody', trs)
        ])
    },
    methods: {
        updateColumns() {
            var _this = this;
            // 这里的prop（data,columns）是数组且包含对象，由于是引用类型，要用深复制
            this.currentColumns = JSON.parse(JSON.stringify(_this.columns));
            this.currentColumns.forEach((col, index) => {
                // 初始化排序标识，记录原始的index
                col._sortType = 'normal';
                col._index = index;
            })
        },
        updateData() {
            var _this = this;
            this.currentData = JSON.parse(JSON.stringify(_this.data));
            this.currentData.forEach((row, index) => {
                row._index = index;
            })
        },
        updateColsWidth() {
            var _this = this;
            this.currentColsWidth = JSON.parse(JSON.stringify(_this.colsWidth));
        },
        handleSortByAsc(index) {
            var key = this.currentColumns[index].key;
            // console.log(index, key)
            // 重置排序标识
            this.currentColumns.forEach((col) => {
                col._sortType = 'normal';
            })

            this.currentColumns[index]._sortType = 'asc';

            this.currentData.sort((a, b) => {
                return a[key] > b[key] ? 1 : -1;
            })
        },
        handleSortByDesc(index) {
            var key = this.currentColumns[index].key;

            this.currentColumns.forEach((col) => {
                col._sortType = 'normal';
            });

            this.currentColumns[index]._sortType = 'desc';

            this.currentData.sort((a, b) => {
                return a[key] < b[key] ? 1 : -1;
            })
        }
    },
    watch: {
        data() {
            this.updateData();

            var sortedColumn = this.currentColumns.filter((col) => {
                return col._sortType !== 'normal';
            });

            if (sortedColumn.length > 0) {
                if (sortedColumn[0]._sortType === 'asc') {
                    this.handleSortByAsc(sortedColumn[0]._index);
                } else {
                    this.handleSortByDesc(sortedColumn[0]._index);
                }
            }
        },
        colsWidth() {
            this.updateColsWidth();
        }
    },
    mounted() {
        this.updateData();
        this.updateColumns();
        this.updateColsWidth();
    }
})