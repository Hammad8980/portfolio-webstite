import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
// import image5 from '../assets/image5.png';

function Projects() {
  const projects = [
    {
      name: "Mr C's Classic Cars Collection",
      description: "Mr C's Classic Cars Collection is a web-based application designed to facilitate the rental of timeless vintage vehicles. This project aims to provide a seamless and intuitive platform for customers to explore, book, and manage their classic car rentals. The primary goal is to embrace the legacy of classic cars while offering a modern solution for renting these timeless vehicles.",
      imageUrl: image1
    },
    {
      name: 'Dice Game',
      description: 'Roll the dice and test your luck! Enjoy a simple and engaging dice game experience on this website, crafted with HTML, CSS, and JavaScript.',
      imageUrl: image2,
      link: 'https://hammad8980.github.io/Dice-game/'
    },
    {
      name: 'GameXoria',
      description: 'GameXoria: Your ultimate destination for all things gaming! Explore a vast collection of video games, consoles, accessories, and more. Find the latest releases, exclusive deals, and immerse yourself in the world of gaming with GameXoria.',
      imageUrl: image3,
      link: 'https://hammad8980.github.io/GameXoria/'
    },
    {
      name: 'Todo List App',
      description: "Your intuitive task management solution powered by React! Stay organized and productive with our sleek todo list app. Utilizing React's useState and useEffect hooks, Reactify offers seamless task management, real-time updates, and customizable features to help you conquer your day efficiently.",
      imageUrl: image4,
      link: 'https://hammad8980.github.io/react-app-project/'
    },
   
  ];

  return (
    <Container className="mt-5">
      <h2>My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={project.imageUrl} />
              </a>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
