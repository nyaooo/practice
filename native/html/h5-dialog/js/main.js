(function () {
    const openModalBtn = document.querySelector('#open_modal');
    const closeModalBtn = document.querySelector('#close_modal');
    const returnValueBtn = document.querySelector('#return_value_modal')
    const modal = document.querySelector('#modal');
    const returnSpan = document.querySelector('#modal_returnValue');

    var msg = 'Close';

    // 显示dialog
    openModalBtn.addEventListener('click', () => {
        modal.showModal();
    });

    // 关闭dialog
    closeModalBtn.addEventListener('click', () => {
        modal.close(msg);
    });

    // 关闭dialog且传预定值
    returnValueBtn.addEventListener('click', () => {
        modal.close('Myself');
    });

    // 点阴影区域关闭dialog
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close('Close');
        }
    })

    // 显示close回传的str
    modal.addEventListener('close', () => {
        returnSpan.innerHTML = modal.returnValue;
    });
})();