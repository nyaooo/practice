const app = new Vue({
    el: '#app',
    data: {
        columns: [{
            title: '姓名',
            key: 'name'
        }, {
            title: '年龄',
            key: 'age',
            sortable: true
        }, {
            title: '出生日期',
            key: 'birthday',
            sortable: true
        }, {
            title: '地址',
            key: 'address'
        }],
        data: [{
            name: '小明',
            age: 18,
            birthday: '1999-02-21',
            address: '北京路3号3-3'
        }, {
            name: '小明',
            age: 22,
            birthday: '1996-02-21',
            address: '北京路3号3-3'
        }, {
            name: '小明',
            age: 19,
            birthday: '1998-02-21',
            address: '北京路3号3-3'
        }, {
            name: '小明',
            age: 18,
            birthday: '1999-01-21',
            address: '北京路3号3-3'
        }],
        colsWidth: [120, 145, 200, 200]
    },
    methods: {
        handleAddData() {
            this.data.push({
                name: '三毛',
                age: 23,
                birthday: '1995-09-08',
                address: '五一路1号1-1'
            })
        }
    }
})