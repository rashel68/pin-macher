
function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinWidth = pin + '';
    const pinDisplay = document.getElementById('pinDisplay');

    if (pinWidth.length == 4) {
        pinDisplay.value = pin;
    } else {
        return generatePin();
    }
}
document.getElementById('generateBtn').addEventListener('click', function () {
    generatePin();
});

document.getElementById('calcBtn').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcDisplay = document.getElementById('calcNumbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcDisplay.value = '';
        }
    }
    else {
        const newNumber = calcDisplay.value + number;
        calcDisplay.value = newNumber;
    }

});

function verifyBtn() {
    const pin = document.getElementById('pinDisplay').value;
    const number = document.getElementById('calcNumbers').value;
    const failMsg = document.getElementById('notify-fail');
    const successMsg = document.getElementById('notify-mached');
    if (pin == number) {
        successMsg.style.display = 'block';
        failMsg.style.display = 'none';
    } else {
        failMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
}