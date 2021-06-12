window.onload = function(e) {
    console.log('window.document.onload');

    let debugBtn = document.querySelector('#debug-btn');
    let openChessBtn = document.querySelector('#open-chess');
    let openLichessBtn = document.querySelector('#open-lichess');
    let options = document.querySelectorAll('.radio1');

    debugBtn.addEventListener('click', (e) =>  {
        debug1();
    });

    openChessBtn.addEventListener('click', (e) =>  {
        openChess();
    });
    openLichessBtn.addEventListener('click', (e) =>  {
        openLichess();
    });

    options.forEach((option, i) => {
        option.addEventListener('click', (e) => {
            swtichOption();
        });
    });

    init();
};

function init() {
    let sOption = document.querySelector('#s-option');
    let cOption = document.querySelector('#c-option');
    sOption.checked = 'checked';
    cOption.checked = '';

    let cw1 = document.querySelector('#cw');
    let ch1 = document.querySelector('#ch');
    cw1.value = 1500;
    ch1.value = 920;

    swtichOption();
}

function debug1() {
    let rst = checkSizeIsNumber();
    console.log(rst);
};

function swtichOption() {
    let option1 = document.querySelector('input[name="radio1"]:checked').value;

    let sinputs = document.querySelectorAll('.suggest-input');
    let cinputs = document.querySelectorAll('.custom-input');

    if (option1 == 0) {
        sinputs.forEach((item, i) => {
            item.classList.remove('disabled-input');
        });
        cinputs.forEach((item, i) => {
            item.classList.add('disabled-input');
            item.disabled = 'disabled';
        });
    } else {
        sinputs.forEach((item, i) => {
            item.classList.add('disabled-input');
        });
        cinputs.forEach((item, i) => {
            item.classList.remove('disabled-input');
            item.disabled = '';
        });
    }
}

function getSize() {
    let option1 = document.querySelector('input[name="radio1"]:checked').value;
    let defaultSizeArray = [1500, 920];
    if (option1 == 1) {
        let cw1 = document.querySelector('#cw');
        let ch1 = document.querySelector('#ch');
        let cw1Value = cw1.value;
        let ch1Value = ch1.value;

        return [cw1Value, ch1Value];
    }

    return defaultSizeArray;
}

function checkSizeIsNumber() {
    let cw1 = document.querySelector('#cw');
    let ch1 = document.querySelector('#ch');
    let cw1Value = cw1.value;
    let ch1Value = ch1.value;
    console.log(cw1);
    console.log(ch1);
    console.log(cw1Value);
    console.log(ch1Value);
    console.log(isNaN(cw1Value));
    console.log(isNaN(ch1Value));

    if (cw1Value == '' || ch1Value == '') {
        let popModal = new bootstrap.Modal(document.querySelector('#not-integer-modal'));
        popModal.toggle();
        return false;
    }

    if (isNaN(cw1Value) || isNaN(ch1Value)) {
        let popModal = new bootstrap.Modal(document.querySelector('#not-integer-modal'));
        popModal.toggle();
        return false;
    } else {
        return true;
    }
}

function openChess() {
    let valid = checkSizeIsNumber();
    if (!valid) {
        return false;
    }
    let url = 'https://www.chess.com';
    let size = getSize();
    let str = 'toolbar=no, menubar=no, width=' + size[0] + ', height=' + size[1] + ', noopener=yes';
    window.open(url, '_blank', str);
}

function openLichess() {
    let valid = checkSizeIsNumber();
    if (!valid) {
        return false;
    }
    let url = 'https://lichess.org/';
    let size = getSize();
    let str = 'toolbar=no, menubar=no, width=' + size[0] + ', height=' + size[1] + ', noopener=yes';
    window.open(url, '_blank', str);
}
