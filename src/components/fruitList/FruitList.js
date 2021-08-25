import React from "react";
import "./fruitList.css";

import { Accordion, Container } from "react-bootstrap";
import { DataFruit } from "../dataFruits/DataFruit";

export const FruitList = ({ tempArray, dtInput }) => {
  return (
    <Container>
      <Accordion defaultActiveKey="0">
        {dtInput == ""
          ? DataFruit.map((value, i) => {
              return (
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>
                    {value.icon} {value.name}
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              );
            })
          : tempArray.map((value, i) => {
              return (
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>{value.name}</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
      </Accordion>
    </Container>
  );
};
