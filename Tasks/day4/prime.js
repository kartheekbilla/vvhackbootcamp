function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function checkPrime() {
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
    const primeCheck = isPrime(num);
    result.textContent = primeCheck ? `The number ${num} is a prime number.` : `The number ${num} is not a prime number.`;
}
document.getElementById('submitButton').addEventListener('click', processInput);


document.getElementById('textInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        processInput();
    }
});