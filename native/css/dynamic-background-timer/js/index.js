(function () {
    const timer = document.querySelector('#timer');
    const wallpaper = document.querySelector('.wallpaper');
    var bColor = '';

    var hours = (date) => {
        return format(date.getHours());
    }
    var minutes = (date) => {
        return format(date.getMinutes());
    }
    var seconds = (date) => {
        return format(date.getSeconds());
    }
    var format = (n) => {
        return n < 10 ? '0' + n : n;
    }

    setInterval(() => {
        var _date = new Date();
        bColor += '#' + hours(_date) + minutes(_date) + seconds(_date);
        wallpaper.style.background = bColor;
        timer.innerHTML = bColor;
        bColor = '';
        delete _date;
    }, 1000)
})()