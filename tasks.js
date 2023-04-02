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