import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dice1 from "./assets/dice_1.png";
import dice2 from "./assets/dice_2.png";
import dice3 from "./assets/dice_3.png";
import dice4 from "./assets/dice_4.png";
import dice5 from "./assets/dice_5.png";
import dice6 from "./assets/dice_6.png";
import diceQuestionMark from "./assets/dice_question_mark.png";

const diceImages = [diceQuestionMark, dice1, dice2, dice3, dice4, dice5, dice6];
const defaultDicesState = [0, 0, 0, 0, 0, 0];

function App() {
  const [dices, setDices] = useState(defaultDicesState);
  const [rollResult, setRollResult] = useState(0);
  const [gameResult, setGameResult] = useState(0);

  const handleReset = () => {
    setDices(defaultDicesState);
    setGameResult(0);
    setRollResult(0);
  };

  const handleRollClick = () => {
    const rolled = Array.from({ length: 6 }, () => Math.floor(Math.random() * 6) + 1);
    const result = calculateResult(rolled);
    setRollResult(result);
    setDices(rolled);
    setGameResult((prev) => prev + result);
  };

  const calculateResult = (rolled) => {
    const counts = {};
    rolled.forEach((d) => (counts[d] = (counts[d] || 0) + 1));
    let sum = 0;
    for (let k of Object.keys(counts)) if (counts[k] >= 2) sum += counts[k] * k;
    return sum;
  };

  return (
    <div className="justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="bg-primary text-white p-2">Kości 🎲</h1>

        <div className="d-flex justify-content-center mt-3 gap-2">
          {dices.map((el, i) => (
            <img key={i} src={diceImages[el]} alt="" width="60" height="60" />
          ))}
        </div>

        <div className="mt-3">
          <button className="btn btn-success me-2" onClick={handleRollClick}>
            Rzuć
          </button>
          <button className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </div>

        <p className="mt-3">Wynik tego losowania: {rollResult}</p>
        <p>Wynik gry: {gameResult}</p>
      </div>
    </div>
  );
}

export default App;
