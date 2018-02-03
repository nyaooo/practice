(function () {
    // 获取所有调用了插件的元素
    var _list = document.querySelectorAll('.ks-warpper');

    _list.forEach((item) => {
        // 根据自定义data属性找到关键字
        var _str = item.innerHTML.split('');
        var _keyWordIndex = item.dataset.focus - 1;
        var _keyWord = _str[_keyWordIndex];

        // 加上css
        if (_keyWordIndex == 0) {
            _str[_keyWordIndex] = "<span class='ks-key-word ks-key-begin'>";
        } else if (_keyWordIndex == _str.length - 1) {
            _str[_keyWordIndex] = "<span class='ks-key-word ks-key-end'>";
        } else {
            _str[_keyWordIndex] = "<span class='ks-key-word'>";
        }
        _str[_keyWordIndex] += _keyWord + "</span><span class='ks-placeholder'></span>";
        item.innerHTML = _str.join('')
    })
})()