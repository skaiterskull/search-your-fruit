import React from "react";

import { ListGroup, Container } from "react-bootstrap";
import { DataFruit } from "../dataFruits/DataFruit";

export const FruitList = ({ tempArray, dtInput }) => {
  return (
    <Container>
      <ListGroup variant="flush">
        {dtInput == ""
          ? DataFruit.map((value) => {
              return <ListGroup.Item>{value.name}</ListGroup.Item>;
            })
          : tempArray.map((value) => {
              return <ListGroup.Item>{value.name}</ListGroup.Item>;
            })}
      </ListGroup>
    </Container>
  );
};

// {tempArray.map((value) => {
//     ;
//   })}
