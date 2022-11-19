document.querySelector('a').addEventListener('click', function(event) {
    this.textContent = prompt('Input text');
    event.preventDefault();
})