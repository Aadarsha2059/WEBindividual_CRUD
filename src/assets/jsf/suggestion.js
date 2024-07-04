document.getElementById('drop-suggestion').addEventListener('click', function() {
    const suggestion = document.getElementById('suggestion').value;
    if (suggestion.trim()) {
        alert('Suggestion submitted: ' + suggestion);
        document.getElementById('suggestion-form').reset();
        window.location.href = 'index.html';
    } else {
        alert('Please enter a suggestion.');
    }
});

document.getElementById('delete-suggestion').addEventListener('click', function() {
    document.getElementById('suggestion-form').reset();
});