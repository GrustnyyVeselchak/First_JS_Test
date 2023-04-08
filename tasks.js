/*
//Работа с переменными
let admin;
let name;

name = "Джон"
admin = name
alert(admin);

//Придумайте правильные имена

let planet;
let userName

//Взаимодействие: alert, prompt, confirm

userName = prompt('Как тебя зовут?', []); //вызывает модальное окно с тектосвым полем
confirm(`Тебя зовут ${userName}?`); // вызывает модальное коно с выбором ок\отмена
alert(userName);

//Базовые операторы, математика

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12
alert(+a + +b); //3


//Инструкция "if"

if ("") {
    alert( 'Привет' );
  } else {
    alert( 'Пока');
  };

title = prompt('Какое "официальное" название JavaScritp?');

(title === "ECMAScript") ? alert("Верно") : alert ("Не знаете? ECMAScript!");

value = prompt ()
if (value>0) {
    alert(1);
}   else if (value<0) {
    alert (-1);
}   else if (value==0) {
    alert (0);
}


let message;

(login == 'Сотрудник') ? message = 'Привет':
(login == 'Директор') ? message = 'Здравствуйте':
(login == 'Нет логина') ? message = 'Нет логина': message = '';

*/

//Логические операторы 

let login = prompt('Введите логин');
let password;

if (login ==='Админ') {
    password = prompt('Введите пароль')
    if (password === 'Я главный') {
        alert('Hello');
    }   else if (password === '' || password === null) {
        alert('Отменено')
    }   else {
        alert('Неверный пароль');
    }
}   else if (login === '' || login === null) {
    alert('Отменено');
}   else {
    alert('Я вас не знаю');
}   
