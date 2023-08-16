function shiftText(inputText, shiftAmount) {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i) + shiftAmount;
        result += String.fromCharCode(charCode);
    }
    return result;
}

function encrypt() {
    let inText = document.querySelector('#originalText').value;
    let onText = document.querySelector('#resultText');
    onText.textContent = shiftText(inText, 3);
}

function decrypt() {
    let inText = document.querySelector('#originalText').value;
    let onText = document.querySelector('#resultText');
    onText.textContent = shiftText(inText, -3);
}