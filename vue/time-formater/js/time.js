var Time = {
    getUnix: function () {
        return (new Date().getTime());
    },
    getNormalDate: function (timestamp) {
        var date = new Date(timestamp);

        var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

        return date.getFullYear() + '-' + month + '-' + day;
    },
    getFormatDate: function (timestamp) {
        var now = this.getUnix();

        var timer = (now - timestamp) / 1000;
        var tip = '';

        if (timer < 60) {
            tip = '刚刚';
        } else if (timer >= 60 && timer < 3600) {
            tip = Math.floor(timer / 60) + '分钟前';
        } else if (timer >= 3600 && timer < 86400) {
            tip = Math.floor(timer / 3600) + '小时前';
        } else if (timer >= 86400 && (timer / 86400) <= 31) {
            tip = Math.ceil(timer / 86400) + '天前';
        } else {
            tip = this.getNormalDate(timestamp);
        }

        return tip;
    }
}