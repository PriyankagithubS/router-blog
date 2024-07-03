import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './All.css'; 

const All = () => {
    return (
        <Row className="justify-content-evenly">
            <Col md={4} className="mb-4">
                <Card border="danger">
                    <Card.Img variant="top" src="./fullstack.png" style={{ height: '150px' }} />
                    <Card.Body>
                        <Card.Title style={{ color: 'blueviolet' }}>Fullstack</Card.Title>
                        <Card.Text>
                            Full Stack Development involves handling both front end (client-side) and back end (server-side)
                            aspects of web applications. A full stack developer is proficient in technologies like HTML, CSS, JavaScript,
                            and frameworks such as React or Angular for front end development. They also manage server-side technologies
                            like databases, server logic, and APIs to ensure the application functions seamlessly across various devices,
                            providing a robust user experience.
                        </Card.Text>
                        <Link to="/fullstack" className="nav-link">
                            <Button variant="primary">Go to Fullstack</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={4} className="mb-4">
                <Card border="danger">
                    <Card.Img variant="top" src="./data.png" style={{ height: '150px' }} />
                    <Card.Body>
                        <Card.Title style={{ color: 'blueviolet' }}>Data Science</Card.Title>
                        <Card.Text>
                            
                            Data science is the study of data and how to analyze and interpret it. It involves techniques like data
                            cleaning, data transformation, and statistical analysis to extract meaningful insights from data. Data science
                            professionals work with large datasets, perform exploratory data analysis, and develop models to predict 
                            . 
                            They use tools like Python, R, and SQL for data manipulation and analysis. They also use techniques like machine
                            They also use tools like Python, R, and SQL for data manipulation and
                            analysis. 

                        </Card.Text>
                        <Link to="/datascience" className="nav-link">
                            <Button variant="primary">Go to Data Science</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} className="mb-4">
                <Card border="danger">
                    <Card.Img variant="top" src="./cyber.png" style={{ height: '150px' }} />
                    <Card.Body>
                        <Card.Title style={{ color: 'blueviolet' }}>Cyber Security</Card.Title>
                        <Card.Text>
                            Cyber Security is the practice of defending computer systems, networks, and data from unauthorized access, attacks, 
                            and damage. It encompasses a range of technologies and processes, including network security, cryptography
                            . Cyber security professionals work to safeguard digital assets and
                             ensure the confidentiality, integrity, and availability of information in an increasingly interconnected world
                              threatened by cyber threats and malicious actors.
                        </Card.Text>
                        <Link to="/cyber security" className="nav-link">
                            <Button variant="primary">Go to Cyber Security</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} className="mb-4">
                <Card border="danger">
                    <Card.Img variant="top" src="./arti.png" style={{ height: '150px' }} />
                    <Card.Body>
                        <Card.Title style={{ color: 'blueviolet' }}>Artificial Intelligence</Card.Title>
                        <Card.Text>
                            Artificial intelligence is the simulation of human intelligence processes, such as the brain, which comprises
                            the brains of computers and other machines that are programmed to think like humans. Artificial intelligence
                            involves techniques like machine learning, natural language processing, and other technologies to enable systems
                            to learn from experience and improve their performance.  
                        </Card.Text>
                        <Link to="/artificial intelligence" className="nav-link">
                            <Button variant="primary">Go to Artificial Intelligence</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} className="mb-4">
                <Card border="danger">
                    <Card.Img variant="top" src="./dev.png" style={{ height: '150px' }} />
                    <Card.Body>
                        <Card.Title style={{ color: 'blueviolet' }}>DevOps</Card.Title>
                        <Card.Text>
                            DevOps is a set of practices and tools designed to improve the productivity and scalability of software development processes. It involves techniques such as
                            continuous integration, continuous deployment, and monitoring to ensure software quality and reliability. DevOps can be used to automate
                            the software development process, reduce deployment times, and improve overall software performance.
                        </Card.Text>
                        <Link to="/devops" className="nav-link">
                            <Button variant="primary">Go to DevOps</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default All;
