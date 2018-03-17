const app = new Vue({
    el: '#app',
    data: {
        username: '',
        message: '',
        list: [{
            name: '小明',
            message: '我是小明的留言'
        }, {
            name: '锤子',
            message: '我是锤子的留言'
        }]
    },
    methods: {
        handleSend() {
            if (this.username && this.message) {
                this.list.push({
                    name: this.username,
                    message: this.message
                });
                this.message = '';
            } else {
                alert('昵称或留言不能为空');
                return false;
            }
        },
        handleReply(index) {
            // 通过索引，获取要回复给哪一个username
            var str = this.list[index].name;
            this.message = '回复@' + str + '： ';
            this.$refs.message.handleFocus();
        },
        handleDelete(index) {
            console.log(index)
            if (confirm('是否删除本条留言')) {
                this.list.splice(index, 1);
            }
        }
    }
})