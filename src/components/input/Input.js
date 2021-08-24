import React from "react";
import { Container } from "react-bootstrap";

export const Input = ({ getDtInput }) => {
  const handleOnChange = (e) => {
    const { value } = e.target;

    getDtInput(value);
  };

  return (
    <Container>
      <div className="">
        <label htmlFor="">Fruit Name : </label>
        <span> </span>
        <input type="text" name="name" onChange={handleOnChange}></input>
      </div>
    </Container>
  );
};
