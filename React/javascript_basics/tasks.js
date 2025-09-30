// aby ten plik działał musisz podmienić 
// atrybut src w pliku html na tasks.js

// 1. Powitanie użytkownika:
// Stwórz obiekt user z polami nam i age. 
// Użyj template stringa aby wypisać w konsoli:
// Hello, I am <name>, and I am <age> year old.

const user = {
    name: "Tomek",
    age: 19
}

console.log(`Hello, I am ${user.name}, and I am ${user.age} year old.`) 

// 2. Kwadrat liczb
// Masz tablice [1, 2, 3, 4].
// Użyj funkcji .map() aby utworzyć tablicę z kwadratami liczb,
// Użyj funkcji .foreach() na nowo stworzonej tablicy aby wypisać liczby

const numbers = [1, 2, 3, 4];
const poweredNumbers = numbers.map(num => num * num);
poweredNumbers.forEach(num => console.log(num));


// 3. Pełnoletniość
// Napisz funkcję strzałkową isAdult(user), która:
// przyjmie obiekt user i zwraca "Dorosły" jeśli age >= 18
// w przeciwnym razie zwróci "Niepełnoletni"
// stwórz tą funkcje normalnie
// a potem utworz skróconą wersję za pomocą ternary operator
// warunek ? spełniony : nie spełniony

const isAdult1 = (user) => {
    if (user.age >= 18) {
        return "Pełnoletni"
    } else {
        return "Niepełnoletni"
    }
}

const isAdult2 = (user) => user.age >= 18 ? "Pełnoletni" : "Niepełnoletni"

console.log(isAdult1(user));
console.log(isAdult2(user))


// 4. Zliczanie znaków
// Masz string "hello". Zamień go na tablicę znaków 
// za pomocą metody split(""), a następnie użyj .forEach(),
// aby policzyć ile razy występuje każdy znak
// wynik zapisz w obiekcie np. w takim formacie
// {h: 1, e: 1, l: 2, o: 1}

const msg = "hello"
const msgArr = msg.split("");
const lettersCount1 = {}

msgArr.forEach(letter => {
    if (lettersCount1[letter]) {
        lettersCount1[letter] += 1
    } else {
        lettersCount1[letter] = 1
    }
})
console.log(lettersCount1)

// lub można krócej
const lettersCount2 = {}
msgArr.forEach(letter => lettersCount2[letter] ? 
    lettersCount2[letter] += 1 : lettersCount2[letter] = 1
)
console.log(lettersCount2)




// 5. Statystyki z tablicy użytkowbików: 

const users = [
  { name: "Tomek", age: 19 },
  { name: "Ala", age: 22 },
  { name: "Ola", age: 17 },
  { name: "Jan", age: 19 },
  { name: "Ala", age: 22 }
];

// Napisz funkcje które:
// 1. zwraca tablice imion wszystkich pełnoletnich użytkowników
// - wykorzystaj .filter oraz .map

const findAdults = (users) => {
    const adults = users.filter(user => user.age >= 18);
    const adultNames = adults.map(user => user.name);
    return adultNames;
}
console.log(findAdults(users));

// można też skrócić ten zapis za pomocą łączenia metod
// tablicowych

const findAdultsShorter = (users) => users.filter(u => u.age >= 18).map(u => u.name);

console.log(findAdultsShorter(users)); // ta sama logika

// 2. zlicza, ile razy występuje każde imię,
// - wykorzystaj .forEach oraz obiekt


const countNames = (users) => {
    const namesCount = {}
    users.forEach((user) => namesCount[user.name] ? namesCount[user.name] += 1 : namesCount[user.name] = 1)
    return namesCount;
}

console.log(countNames(users));

const getHighestFrequencyName = (countedNames) => {
    let highestFrequency = 0;
    let highestFrequencyName = ""
    for (const [name, frequency] of Object.entries(countedNames)) {
        if (frequency > highestFrequency) {
            highestFrequency = frequency;
            highestFrequencyName = name;
        }
    }
    return {
        name: highestFrequencyName,
        count: highestFrequency
    }
}

console.log(getHighestFrequencyName(countNames(users)))


// Na końcu wykorzystując te 2 funkcje 
// za pomocą template literal - `text... ${zmienna}`
// wypisz "Pełnoletni użytkownicy: Ala, Tomek, Ala, Jan. Najczęstsze imię: Ala (2 razy)"
const display = () => {
    const adults = findAdults(users)
    const countedNames = countNames(users)
    const {name, count} = getHighestFrequencyName(countedNames)
    const msg = `Pełnoletni użytkownicy: ${adults.join(", ")}. Najczęstsze imię: ${name} (${count} razy)`
    console.log(msg);
}
display();