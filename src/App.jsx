import "./App.css";
import { Books } from "./components/Books";
import { Pens } from "./components/Pens";
import { Notebooks } from "./components/Notebooks";
import { InkPens } from "./components/InkPens";

function App() {
  return (
    <>
      <Books />
      <Pens />
      <Notebooks />
      <InkPens />
    </>
  );
}

export default App;
