import "./App.css";
import { Books } from "./components/Books";
import { Pens } from "./components/Pens";
import { Notebooks } from "./components/Notebooks";

function App() {
  return (
    <>
      <Books />
      <Pens />
      <Notebooks />
      <ink />
    </>
  );
}

export default App;
