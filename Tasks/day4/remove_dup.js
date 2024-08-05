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

