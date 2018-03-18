var Birthday = {
    getDays: function (timestamp) {
        var now = Time.getUnix()

        var days = Math.floor((now - timestamp) / 86400000);

        return days;
    },
    getAge: function (timestamp) {
        var days = this.getDays(timestamp)

        var year = Math.floor(days / 365)
        var mouth = Math.floor(days % 365 / 31)
        var day = days % 365 % 31

        return year + '年' + mouth + '个月' + day + '天' 
    }
}