import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FruitList } from "./components/fruitList/FruitList";
import { Input } from "./components/input/Input";
import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import { fecthAllList } from "../src/apis/listApi.js";

function App() {
  const [dtInput, setDtInput] = useState("");
  const [dtFruit, setDtFuit] = useState([]);

  useEffect(() => {
    const loadAllData = async () => {
      const { result } = await fecthAllList();
      setDtFuit(result);
    };
    loadAllData();
  }, []);

  const getDtInput = (value) => {
    setDtInput(value);
  };

  const tempArray = dtFruit.filter((value) => value.name.includes(dtInput));

  return (
    <>
      <Container className="mt-3">
        <h1>Search your Fruit 🍎 🍌 🥭</h1>
      </Container>

      <Input getDtInput={getDtInput} />
      <FruitList tempArray={tempArray} dtInput={dtInput} dtFruit={dtFruit} />
    </>
  );
}

export default App;
