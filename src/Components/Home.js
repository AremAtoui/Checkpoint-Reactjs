import "./Home.css";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Home() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
              <NavDropdown title="Another" id="navbarScrollingDropdown">
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">

                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>

              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="Cards">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card.Body>
            <Card.Title>Tennis</Card.Title>
            <Card.Text>
              Tennis is a game played with two opposing players (singles) or pairs of players (doubles) using tautly strung rackets to hit a ball of specified size, weight, and bounce over a net on a rectangular court. Points are awarded whenever the opponent fails to correctly return the ball within the prescribed dimensions of the court..
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/5247203/pexels-photo-5247203.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Card.Body>
            <Card.Title>Football</Card.Title>
            <Card.Text>
              Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team’s goal without using their hands or arms. The team that scores more goals wins. Football is the world’s most popular ball game in numbers of participants and spectators..
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Card.Body>
            <Card.Title>Fitness</Card.Title>
            <Card.Text>
              Experts define physical fitness as “one's ability to execute daily activities with optimal performance, endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior.” This description goes beyond being able to run quickly or lift heavy weights.....
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Home;