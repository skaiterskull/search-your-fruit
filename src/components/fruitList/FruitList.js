import React from "react";

import { ListGroup, Container } from "react-bootstrap";
import { DataFruit } from "../dataFruits/DataFruit";

export const FruitList = ({ tempArray, dtInput }) => {
  return (
    <Container>
      <ListGroup variant="flush">
        {dtInput == ""
          ? DataFruit.map((value, i) => {
              return (
                <ListGroup.Item
                  key={i}
                  variant={i % 2 == 0 ? "info" : "danger"}
                >
                  {value.name}
                </ListGroup.Item>
              );
            })
          : tempArray.map((value, i) => {
              return (
                <ListGroup.Item
                  key={i}
                  variant={i % 2 == 0 ? "info" : "danger"}
                >
                  {value.name}
                </ListGroup.Item>
              );
            })}
      </ListGroup>
    </Container>
  );
};
