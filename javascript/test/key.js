
function processInput() {
    const input = document.getElementById('textInput').value;
    const result = document.getElementById('result');
    if (input.trim() === '') {
        result.textContent = 'Please enter something.';
    } else {
        result.textContent = `You entered: ${input}`;
    }
}


document.getElementById('submitButton').addEventListener('click', processInput);


document.getElementById('textInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        processInput();
    }
});
