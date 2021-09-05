import React from "react";
import "./fruitList.css";

import { Accordion, Container } from "react-bootstrap";

export const FruitList = ({ tempArray, dtInput, dtFruit }) => {
  return (
    <Container>
      <Accordion defaultActiveKey="0" flush>
        {dtInput == ""
          ? dtFruit.map((value, i) => {
              return (
                <Accordion.Item
                  eventKey={i}
                  style={{
                    backgroundColor: value.color,
                    color: "white",
                    fontWeight: "bolder",
                    opacity: 0.9,
                  }}
                >
                  <Accordion.Header
                    style={{
                      opacity: 0.9,
                    }}
                  >
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
                <Accordion.Item
                  eventKey={i}
                  eventKey={i}
                  style={{
                    backgroundColor: value.color,
                    color: "white",
                    fontWeight: "bolder",
                    opacity: 0.9,
                  }}
                >
                  <Accordion.Header
                    style={{
                      opacity: 0.9,
                    }}
                  >
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
            })}
      </Accordion>
    </Container>
  );
};

//
