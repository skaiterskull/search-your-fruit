import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FruitList } from "./components/fruitList/FruitList";
import { Input } from "./components/input/Input";
import { useState } from "react";
import { DataFruit } from "./components/dataFruits/DataFruit";
import { Container } from "react-bootstrap";

function App() {
  const [dtInput, setDtInput] = useState("");

  const getDtInput = (value) => {
    setDtInput(value);
  };

  const tempArray = DataFruit.filter((value) => value.name.includes(dtInput));

  return (
    <>
      <Container className="mt-3">
        <h1>Search your Fruit 🍎 🍌 🥭</h1>
      </Container>

      <Input getDtInput={getDtInput} />
      <FruitList tempArray={tempArray} dtInput={dtInput} />
    </>
  );
}

export default App;
