import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

export const Input = ({ getDtInput }) => {
  const handleOnChange = (e) => {
    const { value } = e.target;

    getDtInput(value);
  };

  return (
    <Container>
      <Form>
        <Col className="mb-4 mt-4">
          <Form.Control
            size="lg"
            type="text"
            name="name"
            onChange={handleOnChange}
            placeholder="Place your name here e.g apple, mango, banana"
          />
        </Col>
      </Form>
    </Container>
  );
};
