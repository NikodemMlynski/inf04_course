import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import obrazków kości – assets zgodnie z wymogiem egzaminu
import dice1 from "./assets/dice_1.png";
import dice2 from "./assets/dice_2.png";
import dice3 from "./assets/dice_3.png";
import dice4 from "./assets/dice_4.png";
import dice5 from "./assets/dice_5.png";
import dice6 from "./assets/dice_6.png";
import diceQuestionMark from "./assets/dice_question_mark.png";

// Tablica obrazków – index odpowiada wartości kości
const diceImages = [diceQuestionMark, dice1, dice2, dice3, dice4, dice5, dice6];

// Stan początkowy kości – wszystkie pokazują znak zapytania
const defaultDicesState = [0, 0, 0, 0, 0, 0];

function App() {
  // Stan sześciu kości
  const [dices, setDices] = useState(defaultDicesState);

  // Wynik ostatniego rzutu – spełnia wymaganie wyświetlania wyniku rzutu
  const [rollResult, setRollResult] = useState(0);

  // Wynik gry – suma wszystkich rzutów
  const [gameResult, setGameResult] = useState(0);

  // Funkcja resetująca stan gry – przywraca kości do znaku zapytania i zeruje wyniki
  const handleReset = () => {
    setDices(defaultDicesState);
    setRollResult(0);
    setGameResult(0);
  };

  // Funkcja wywoływana po kliknięciu przycisku "Rzuć"
  const handleRollClick = () => {
    // Losowanie 6 liczb od 1 do 6
    const rolled = Array.from({ length: 6 }, () => Math.floor(Math.random() * 6) + 1);

    // Obliczenie wyniku rzutu
    const result = calculateResult(rolled);

    // Aktualizacja stanu kości
    setDices(rolled);

    // Aktualizacja wyniku ostatniego rzutu
    setRollResult(result);

    // Sumowanie wyniku w grze
    setGameResult(prev => prev + result);
  };

  // Funkcja licząca wynik rzutu wg zasad: jeśli liczba pojawia się co najmniej 2 razy, dodaj liczbę * ilość wystąpień
  const calculateResult = (rolled) => {
    const counts = {};
    rolled.forEach(d => (counts[d] = (counts[d] || 0) + 1));
    let sum = 0;
    for (let k of Object.keys(counts)) {
      if (counts[k] >= 2) sum += counts[k] * k;
    }
    return sum;
  };

  return (
    // Wyśrodkowanie całego widoku pionowo i poziomo – spełnia wymaganie egzaminu
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <div className="container text-center bg-light p-4 rounded shadow">
        {/* Nagłówek H1 z tłem niebieskim i białym tekstem – zgodnie z wyglądem egzaminu */}
        <h1 className="bg-primary text-white p-2">Kości 🎲</h1>

        {/* Rząd obrazków kości – wyświetla wynik rzutu */}
        <div className="d-flex justify-content-center mt-3 gap-2">
          {dices.map((die, i) => (
            <img
              key={i}
              src={diceImages[die]}
              alt={`Kość ${die || "?"}`}
              width="60"
              height="60"
            />
          ))}
        </div>

        {/* Przyciski */}
        <div className="mt-3">
          <button className="btn btn-success me-2" onClick={handleRollClick}>
            Rzuć
          </button>
          <button className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </div>

        {/* Wyniki */}
        <p className="mt-3">Wynik tego losowania: {rollResult}</p>
        <p>Wynik gry: {gameResult}</p>
      </div>
    </div>
  );
}

export default App;
