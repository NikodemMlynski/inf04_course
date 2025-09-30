// deklaracje zmiennych i typy

// deklaracja zmiennej
let a = 25;

// deklaracja stałej
const b = 30; // tej stałej nie można już nadpisywać

// typy danych 
const t1 = 10; // number
const t2 = "abcd" // string 
const t3 = true; // Boolean
const t4 = null; // null 
const t5 = [1, 2, 4] // object
const t6 = {
    name: "Tomek",
    age: 16
} // object

console.log(typeof t5);


// instrukcje warunkowe i operatory porównania

let o1 = 5;
let o2 = 3

if (o1 > o2) {
    console.log("o1 > o2");
} else {
    console.log("o2 > o1");
}

const age = 17

if (age >= 18) {
    console.log("Dorosły"); 
} else {
    console.log("Niepełnoletni");
}

// skrócony operator instrukcji warunkowej (przydatny w react)

const isLoggedIn = true;
console.log(isLoggedIn ? "Zalogowany" : "Niezalogowany")
// warunek ? operacja spełnienia warunku : operacja niespełnienia warunku



// funkcje

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

// funkcje strzałkowe (bardzo przydatne w react) 
// 90% funkcji pisanych w react to właśnie funkcje strzałkowe

const multiply1 = (a, b) => {
    return a * b;
}
// lub jeżeli od razu chcemy zwrócić jakąś wartość to możemy
// skrócić zapis 

const multiply2 = (a, b) => a * b;


// Tablice i metody tablicowe

const numbers = [1, 2, 3, 4];

// iteracja 
numbers.forEach(num => {
    console.log(num)
});

// jak wcześniej możemy skrócić zapis ponieważ wykonujemy
// tylko jedną operacje w ciele funkcji

numbers.forEach(num => console.log(num));
// funkcja forEach nic nie zwraca

// nowa zmodyfikowana tablica
const doubled = numbers.map(num => num * 2);
// map zwraca nową tablicę w której każdy element jest 
// zastąpiony elementem zwróconym w środku funkcji strzałkowej

const ones = numbers.map(num => 1) 
// teraz tablica zostanie wypełniona jedynkami

const powered = numbers.map(num => num*num);

// filtrowanie
const even = numbers.filter(num => num % 2 === 0);

// filter zwraca nową tablicę z elementami które spełniają
// warunek podany w funkcji strzałkowej
// w tym przypadku podzielne przez 2 

// znajdywanie elementów
const found = numbers.find(num => num > 2);
// find zwraca pierwszy element spełniający podany wawrunek
// w tym przypadku zwróci wartośc 3


// Obiekty

const user = {
    name: "Tomek",
    age: 19,
}

// do pól obiektów możemy odwoływać się na dwa sposoby: 
console.log(user.name)
console.log(user["age"]) // ten jest szczególnie przydatny
// jeżeli nie znamy konkretnej nazwy pola obiektu np.

const numbers2 = [1, 1, 2, 3, 3, 3, 4, 5]


const count_numbers1 = (numbers) => {
    const numbers_count = {}
    numbers.forEach(num => {
        if (numbers_count[num]) {
            numbers_count[num] += 1
        } else {
            numbers_count[num] = 1
        }
    })
    return numbers_count;
}

const counted_numbers1 = count_numbers1(numbers2);
console.log(counted_numbers1);

const count_numbers2 = (numbers) => {
    const numbers_count = {}
    numbers.forEach(num => numbers_count[num] 
        ? numbers_count[num] += 1 : numbers_count[num] = 1)
    return numbers_count
}

const counted_numbers2 = count_numbers2(numbers2)
console.log(counted_numbers2)


// pętle
console.log("for: ")
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// pętla foreach
numbers5 = [5, 4, 1, 2, 6]
console.log("Foreach: ")
for (const num of numbers5) {
    console.log(num);
}

// rzeczy specyficzne dla javascript (przydatne w react)

// template string

const user2 = {
    name: "Tomek",
    age: 19
}

const msg = `Witaj ${user2.name}, masz ${age} lat.`

// destrukturyzacja tablicy
const numbersD = [4, 3]

const [first, second] = numbersD;
// first = 4, second = 3

// destrukuryzacja obiektów

const book =  {
    title: "1984",
    author: "George Orwell"
}
const {title, author} = book;
console.log(`title: ${title}, author: ${author}`)



