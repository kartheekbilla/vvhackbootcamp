function countVowels(str) {
    const lowerStr = str.toLowerCase();
    let count = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let char of lowerStr) {
        if (vowels.has(char)) {
            count++;
        }
    } 
    return count;
}
function calculateVowelCount() {
    const input = document.getElementById('textInput').value;
    const result = document.getElementById('result');
    if (input.trim() === '') {
        result.textContent = 'Please enter a string.';
        return;
    }
    const vowelCount = countVowels(input);
    result.textContent = `Number of vowels: ${vowelCount}`;
}
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
function removeDuplicates(arr) {
    const arr1 = new Set(arr);
    return [...arr1];
}

function removeDuplicatesFromInput() {
    const input = document.getElementById('arrayInput').value;
    const result = document.getElementById('result');
    if (input === '') {
        result.textContent = 'Please enter some numbers.';
        return;
    }
    const array = input.split(',').map(Number);
    const uniqueArray = removeDuplicates(array);
    result.textContent = ` ${uniqueArray.join(', ')}`;
}

function reverseString(str) {
    const charArray = str.split('');
    const reversedArray = charArray.reverse();
    const reversedStr = reversedArray.join('');
    return reversedStr;
}

function reverseStringFromInput() {
    const input = document.getElementById('stringInput').value;
    const result = document.getElementById('result');
    if (input.trim() === '') {
        result.textContent = 'Please enter a string.';
        return;
    }
    const reversedStr = reverseString(input);
    result.textContent = `${reversedStr}`;
}
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