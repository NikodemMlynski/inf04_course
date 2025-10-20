import React from "react";

const ColorSliders = ({
  red,
  green,
  blue,
  opacity,
  setRed,
  setGreen,
  setBlue,
  setOpacity,
}) => {
  return (
    <div className="card p-4 shadow-sm mx-auto">
      <div className="mb-3">
        <label className="form-label">Red: {red}</label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="255"
          value={red}
          onChange={(e) => setRed(Number(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Green: {green}</label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="255"
          value={green}
          onChange={(e) => setGreen(Number(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Blue: {blue}</label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="255"
          value={blue}
          onChange={(e) => setBlue(Number(e.target.value))}
        />
      </div>

      <div>
        <label className="form-label">Opacity: {opacity}%</label>
        <input
          type="range"
          className="form-range"
          min="1"
          max="100"
          value={opacity}
          onChange={(e) => setOpacity(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default ColorSliders;
