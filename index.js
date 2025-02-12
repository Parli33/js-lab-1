//task1
console.log("Task1")

let type1 = 123
let type2
let type3 = "aboba"
let type4 = true
let type5 = null

console.log(typeof (type1))
console.log(typeof (type2))
console.log(typeof (type3))
console.log(typeof (type4))
console.log(typeof (type5))

//task2
console.log("Task 2")

let x1 = 15
let x2 = 20

console.log(x1 == x2)
console.log(x1 < x2)
console.log(x1 <= x2)
console.log(x1 > x2)

//Task 3
console.log("Task 3")

let a = false
let b = null
let c = undefined
console.log(a)
console.log(b)
console.log(c)

//Task4
console.log("Task 4")

console.log("1" + 2 + 3) //2 и 3 становятся строками, вывод: 123
console.log(1 + 2 + "3") //1 + 2 = 3, затем 3 аналагично становится строкой и поетому вывод 33
console.log("1" - 2) //"1" становится числом и получается 1 - 2 = -1
console.log("1" + -2) //-2 становится строчкой, вывод 1-2
console.log("1" + "1" - "1") //сначала "1" и "1" складываются как строки, затем из них вычитается 1
console.log("foo" + -"bar") //foo - строка, -"bar" пытается конвертироваться в число, но оно таковым не является, поетмоу выводится NaN (not a number)
console.log(0 == "0")// == преобразует "0" в 0 и поетому они равны
console.log(0.5 + 0.1 == 0.6) // здесь всё гуд
console.log(0.1 + 0.2 == 0.3) // тут из-за погрешности вычислений будет false
console.log(true + true + true == 3) // true преобразуются в три единицы, поетому true
console.log(true == 1) //true -> 1, поетому результат равен true
console.log(true === 1) // оператор === проверяет как значение, так и тип данных, поетому false
console.log(1 < 2 < 3) // 1 < 2 дает нам 1 (т.к. true), 1 < 3 тоже дает нам true
console.log(3 > 2 > 1) // 3 > 2 дает нам 1 (т.к. true), 1 > 2 неверное, поетому false
console.log(9007199254740991 + 1 == 9007199254740991 + 2) // из-за ограниченной точности чисел прибавление 1 или 2 к числу 9007199254740991 даст одно и то же значение 9007199254740992
console.log(Math.sqrt(-1) == Math.sqrt(-1)) // при сравнении двух NaN выдается false

//Task 5
console.log("Task 5")

let str1 = "Кто "
let str2 = "ты "
let str3 = "такой?"
let concatenation = str1 + str2 + str3
console.log(concatenation)

//Task 6
console.log("Task 6")

let str = "20"
let a1 = 5

console.log(str + a1) //складываются как строки
console.log(str - a1) //вычитаются как числа
console.log(str * "2") //умножаются как числа
console.log(str / 2) //делятся как числа

//Task 7
console.log("Task 7")

let a2 = "12"
let b2 = "7.15"
a2 = Number(a2)
b2 = Number(b2)
console.log(Math.round(a2 % b2))

//Task 8
console.log("Task 8")

let x = 2
if (x !== 2 && x !== 6){
    console.log((x * x - 7 * x + 10) / (x * x - 8 * x + 12))
}
else{
    console.log("На 0 делить нельзя, увы(")
}
//Task 9
console.log("Task 9")

let email = "test@test.com"
if (!email.includes('@')) {
    console.log("Нет собачки @ ((((. Не надо так.")
}

//Task 1
console.log("Stream control")
console.log("Task 1")

let age = 18

if (30 >= age && age >= 18) {
    console.log("Для молодежи")
} else {
    console.log("Для всех возрастов")
}

if (17 >= age >= 0) {
    console.log("Для детей")
} else if (30 >= age && age >= 18) {
    console.log("Для молодежи")
} else {
    console.log("Для всех возрастов")
}

//Task 2
console.log("Task 2")

let A
let B
let max

if (A > B) {
    max = A
} else {
    max = B
}
console.log(max)

//Task 3
console.log("Task 3")
let count = 2;
switch (count) {
    case 1:
        console.log("На ветве сидит ", count, " ворона")
        break;
    case 2:
    case 3:
    case 4:
        console.log("На ветве сидит ", count, " вороны")
        break;
    default:
        console.log("На ветве сидит ", count, " ворон")
        break
}

//Task 4
console.log("Task 4")
let i = 1
while (i < 50) {
    console.log(i)
    i = i + 2
}
for (let i = 1; i <= 50; i = i + 2) {
    console.log(i)
}

//Task 5
console.log("Task 5")
let sum = 0
for (let i = 1; i <= 15; i++) {
    console.log(i)
    sum += i
}
sum = sum - 12
console.log(sum)

//Task 6
console.log("Task 6")
let I = 0
let Y = 3
let X = 2
let C = X
while (I < Y - 1) {
    X = X * C
    I++
}
console.log(X)