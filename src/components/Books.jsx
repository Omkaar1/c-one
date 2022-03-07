import { useState } from "react";

export function Books() {
  const [books, setBooks] = useState(13);

  const addBook = (value) => {
    setBooks(books + value);
  };
  return (
    <div className="items">
      <span>Books:</span>

      <button
        className="addBook"
        onClick={() => {
          addBook(1);
        }}
      >
        +
      </button>

      <button
        className="remBook"
        onClick={() => {
          addBook(-1);
        }}
      >
        -
      </button>

      <span className="totalBooks">{books}</span>
    </div>
  );
}
