import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function Skills() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'NextJs', level: 69},
    { name: 'ASP .NET', level: 82}
  ];

  return (
    <Container className="mt-5">
      <h2>My Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={6} key={index} className="my-2">
            <h4>{skill.name}</h4>
            <ProgressBar now={skill.level} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
