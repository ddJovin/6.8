document.querySelector('#consoleLog').addEventListener('click', function() {
    alert('Метот для вывода сообщения в веб-консоль');
});

document.querySelector('#alert').addEventListener('click', function() {
    alert('Выводит сообщение в отдельном окне и ждет, пока его закроет пользователь');
});

document.querySelector('#prompt').addEventListener('click', function() {
    alert('Выводит сообщение в отдельном окне и ждет, пока пользователь введет информацию и закрое окно');
});
