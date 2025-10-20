// stwórz prostą to-do liste, ktora wyświetla zadania 
// o takiej strukturze:
// {title: "tutył zadania", category: "katagoria", priority: "priorytet"}
// aplikacja powinna skladac sie z dwoch czesci:
// 1. Formularz z polami: 
//  - tytuł - input[text]
//  - category - select
//  - priority - input[range] od 0 do 5
// przycisk Dodaj zadanie.
// 2. Lista dodanych już zadań
// Wyświetla listę zadań dodanych w formularzu



// Funkcjonalność:
// po kliknięciu przycisku "Dodaj" sprawdzane jest czy:
// długość tytuły jest wieksza od 2 i cateogory nie jest puste
// jeżeli tak do dodaje zadanie do tablicy zadań, 
// która jest stanem. Nastepnie wartosci formularza sa resetowane

// jeżeli nie zostanie spełniona walidacja to wyswietla sie 
// alert z wiadomoscia o nieprawidlowych danych

// element listy wyglada nastepujaco:
// title, category, priority

// kolejna funkcjonalnoscia jest mozliwosc filtrowania po 
// kategoriach, jezeli wybrana nie jest wybrana zadna 
// kategoria wyswietlaja sie wszystkie, jezeli jakas kategoria
// jest wybrana to filtrujemy zadania

// podajscie do zapisywania danych w formularzu obojetne
// mozna zrobic za pomoca useState, albo formData
// pamietsaj ze zadanie ma sie dodawacpo kliknieciu 
// przycisku dodaj, czyli po wyslaniu formularza

export default function Task() {
    return (
        <h1>Treść zdania w pliku Task.jsx</h1>
    )
}