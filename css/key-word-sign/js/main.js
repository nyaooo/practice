function randerKs () {
    // 获取所有调用了插件的元素
    var _list = document.querySelectorAll('.fw-warpper');
    console.log(_list[0].innerHTML);

    _list.forEach((item) => {
        // 根据自定义data属性找到关键字
        var _str = item.innerHTML.split('');
        var _keyWordIndex = item.dataset.focus - 1;
        var _keyWord = _str[_keyWordIndex];

        // 加上css
        _str[_keyWordIndex] = "<span class='fw-key-word'>" + _keyWord + "</span><span class='fw-placeholder'></span>";
        item.innerHTML = _str.join('')
    })
}

window.onload = randerKs;