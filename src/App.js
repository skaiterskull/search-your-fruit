import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FruitList } from "./components/fruitList/FruitList";
import { Input } from "./components/input/Input";
import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import { fecthAllList } from "../src/apis/listApi.js";

function App() {
  const [dtInput, setDtInput] = useState("");
  const [dtFruit, setDtFruit] = useState([]);

  useEffect(() => {
    const loadAllData = async () => {
      const { result } = await fecthAllList();
      const sortedData = result.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      setDtFruit(sortedData);
    };
    loadAllData();
  }, []);

  const getDtInput = (value) => {
    setDtInput(value);
  };

  const tempArray = dtFruit.filter((value) =>
    value.name.toLowerCase().includes(dtInput.toLowerCase())
  );

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
