import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="mt-5">
      <h2>Contact Me</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label style={{ textAlign: 'left' }}>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label style={{ textAlign: 'left' }}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label style={{ textAlign: 'left' }}>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label style={{ textAlign: 'left' }}>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
