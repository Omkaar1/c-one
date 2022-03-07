import { useState } from "react";

export function Pens() {
  const [pens, setPens] = useState(10);

  const addPen = (value) => {
    setPens(pens + value);
  };
  return (
    <div className="items">
      <span>Pens:</span>

      <button
        className="addPen"
        onClick={() => {
          addPen(1);
        }}
      >
        +
      </button>

      <button
        className="remPen"
        onClick={() => {
          addPen(-1);
        }}
      >
        -
      </button>

      <span className="totalPens">{pens}</span>
    </div>
  );
}
