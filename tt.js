document.getElementById('myLink').addEventListener('click', function(event) {
    alert('You are about to visit OpenAI!');
});

document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
