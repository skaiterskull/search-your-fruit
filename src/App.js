import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FruitList } from "./components/fruitList/FruitList";
import { Input } from "./components/input/Input";
import { useState } from "react";
import { DataFruit } from "./components/dataFruits/DataFruit";

function App() {
  const [dtInput, setDtInput] = useState("");

  const getDtInput = (value) => {
    setDtInput(value);
  };

  const tempArray = DataFruit.filter((value) => value.name.includes(dtInput));

  return (
    <>
      <Input getDtInput={getDtInput} />
      <FruitList tempArray={tempArray} dtInput={dtInput} />
    </>
  );
}

export default App;
