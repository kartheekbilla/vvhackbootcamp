function sumOfDigits(num) {
    const numStr = num.toString();
    let sum = 0;

    for (let char of numStr) {
        sum += +char;
    }

    return sum;
}

function calculateSumOfDigits() {
    const input = document.getElementById('numberInput').value;
    const result = document.getElementById('result');
    if (input.trim() === '') {
        result.textContent = 'Please enter a number.';
        return;
    }
    const num = parseInt(input);
    if (isNaN(num)) {
        result.textContent = 'Please enter a valid number.';
        return;
    }
    const sum = sumOfDigits(num);
    result.textContent = `${sum}`;
}
