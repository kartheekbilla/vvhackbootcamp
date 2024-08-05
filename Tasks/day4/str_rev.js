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
