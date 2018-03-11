(function () {
    const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');
    const reset = document.querySelector('#reset');
    const m = document.querySelector('#min');
    const s = document.querySelector('#second');


    var startCountdown = () => {
        if (!m.value && !s.value) {
            return false;
        }

        if (stop.hasAttribute('disabled')) {
            stop.removeAttribute('disabled');
            stop.classList.remove('btn-disabled');
        }

        var timer = Number(m.value) * 60 + Number(s.value);

        s.__countdown__ = setInterval(() => {
            if (timer === 0) {
                alert('倒计时结束。');
                stopCountdown();
                m.value = '';
                s.value = '';
                return false;
            }
            timer -= 1;
            m.value = Math.floor(timer / 60) === 0 ? '' : Math.floor(timer / 60);
            s.value = timer % 60;
        }, 1000)
    }
    var stopCountdown = () => {
        clearInterval(s.__countdown__);
        delete s.__countdown__;
    }
    var resetCountdown = () => {
        clearInterval(s.__countdown__);
        delete s.__countdown__;

        m.value = '';
        s.value = '';
        stop.setAttribute('disabled', true);
        stop.classList.add('btn-disabled');
    }

    start.addEventListener('click', startCountdown);
    stop.addEventListener('click', stopCountdown);
    reset.addEventListener('click', resetCountdown);
})()