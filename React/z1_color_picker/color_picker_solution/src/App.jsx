import React, { useState } from "react";
import ImageDisplay from "./components/ImageDisplay";
import ColorSliders from "./components/ColorSliders";

const App = () => {
  const [red, setRed] = useState(128);
  const [green, setGreen] = useState(128);
  const [blue, setBlue] = useState(128);
  const [opacity, setOpacity] = useState(100);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">🎨 RGB & Opacity Controller</h2>

        <ImageDisplay red={red} green={green} blue={blue} opacity={opacity} />

        <div className="mt-4">
          <ColorSliders
            red={red}
            green={green}
            blue={blue}
            opacity={opacity}
            setRed={setRed}
            setGreen={setGreen}
            setBlue={setBlue}
            setOpacity={setOpacity}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
