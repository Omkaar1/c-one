import { useState } from "react";

export function Notebooks() {
  const [notebook, setNotebook] = useState(44);

  const addNotebook = (value) => {
    setNotebook(notebook + value);
  };
  return (
    <div className="items">
      <span>Notebook:</span>

      <button
        className="addNotebook"
        onClick={() => {
          addNotebook(1);
        }}
      >
        +
      </button>

      <button
        className="remNotebook"
        onClick={() => {
          addNotebook(-1);
        }}
      >
        -
      </button>

      <span className="totalNotebooks">{notebook}</span>
    </div>
  );
}
