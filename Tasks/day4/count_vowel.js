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