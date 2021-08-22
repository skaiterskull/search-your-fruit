import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";

export const Input = ({ getDtInput }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    getDtInput(value);
  };

  return (
    <Container>
      <div className="" key="1">
        <label htmlFor="">Fruit Name : </label>
        <span> </span>
        <input type="text" name="name" onChange={handleOnChange}></input>
      </div>
    </Container>
  );
};
