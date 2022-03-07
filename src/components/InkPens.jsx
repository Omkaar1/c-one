import { useState } from "react";

export function InkPens() {
  const [inkpens, setInkpens] = useState(78);

  const addInkpen = (value) => {
    setInkpens(inkpens + value);
  };
  return (
    <div className="items">
      <span>Inkpens:</span>

      <button
        className="addInkpen"
        onClick={() => {
          addInkpen(1);
        }}
      >
        +
      </button>

      <button
        className="remInkpen"
        onClick={() => {
          addInkpen(-1);
        }}
      >
        -
      </button>

      <span className="totalInkpens">{inkpens}</span>
    </div>
  );
}
