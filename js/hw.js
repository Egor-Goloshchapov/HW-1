const age = "14";
console.log(age);

const myName = "Yegor Goloshchapov";
console.log(myName);

let isStudent = "true" ;
let isStuden = "false" ;
console.log(isStudent, isStuden);

let myString ="Я ніколи не терпів поразок. Я просто знайшов 10 000 способів, які не працюють";
console.log(myString);

function myNumber(a, b) {
    return a + b;
}
let result = myNumber(3, 10);
console.log(result);

let myNull = "null";
console.log(myNull);

let userName = prompt("Будь ласка, введіть ваше ім'я:");

if (userName) {
    alert("Привіт, " + userName + "!");
} else {
    alert("Ви не ввели ім'я.");
}

let userConfirmed = confirm("Ви хочете підтвердити цю дію?");

if (userConfirmed) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}


