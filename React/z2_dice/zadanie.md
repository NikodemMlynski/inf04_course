# ZADANIE PRAKTYCZNE – REACT + BOOTSTRAP

**Temat:** „Gra w Kości 🎲”

## CEL

Utwórz aplikację webową w React z wykorzystaniem Bootstrap.
Aplikacja ma pozwalać na rzucanie sześcioma kośćmi, obliczać wynik tego rzutu oraz sumować wynik w trakcie gry.

## STRUKTURA PROJEKTU

```
src/
├── assets/
│   ├── dice_1.png … dice_6.png
│   └── dice_question_mark.png
├── App.jsx                – główny komponent aplikacji
└── main.jsx               – punkt startowy aplikacji
```

## WYGLĄD APLIKACJI

Tytuł okna: „Kości 🎲. Wykonał [numer zdającego]”

Układ:

* Całość wyśrodkowana pionowo i poziomo: `d-flex justify-content-center align-items-center vh-100 vw-100`
* W środku: biały kontener `container text-center` z:

  * Nagłówkiem: „Kości 🎲” z tłem `bg-primary` i białym tekstem `text-white p-2`
  * Rzędem sześciu obrazków kości (60x60 px) – domyślnie znak zapytania
  * Dwoma przyciskami:

    * „Rzuć” – zielony (`btn btn-success`)
    * „Reset” – czerwony (`btn btn-danger`)
  * Pod przyciskami: wyświetlanie wyniku ostatniego rzutu oraz sumy wyników w grze

## DZIAŁANIE

1️⃣ Kliknięcie „Rzuć” powoduje:

* Losowanie 6 kości (wartości od 1 do 6)
* Aktualizację obrazków kości zgodnie z wylosowanymi wartościami
* Obliczenie wyniku rzutu:

  * Dla każdej liczby kości, która pojawia się co najmniej dwa razy, wynik dodaje się do sumy: `suma += liczba * ilość_wystąpień`
* Aktualizacja wyniku rzutu oraz wyniku gry
  * `wynik_gry += wynik_rzutu`

2️⃣ Kliknięcie „Reset” powoduje:

* Przywrócenie obrazków kości do znaku zapytania
* Wyzerowanie wyniku rzutu i wyniku gry

## KOMPONENTY

**App.jsx**

* Zarządza stanem aplikacji:

  * `dices` – tablica sześciu kości
  * `rollResult` – wynik ostatniego rzutu
  * `gameResult` – suma wyników w grze
* Zawiera funkcje: `handleRollClick`, `handleReset`, `calculateResult`
* Renderuje nagłówek, kości, przyciski i wyniki

**assets/**

* Zawiera obrazki kości `dice_1.png` … `dice_6.png` oraz `dice_question_mark.png`

## EFEKT KOŃCOWY

✅ Po kliknięciu „Rzuć” widać wylosowane kości i wynik rzutu.
✅ Wynik gry sumuje wszystkie dotychczasowe rzuty.
✅ Kliknięcie „Reset” przywraca stan początkowy.
✅ Interfejs czytelny, wyśrodkowany i responsywny.
✅ Kod podzielony logicznie i poprawnie sformatowany.
