import React from 'react';
import { Col, Row, Container, Card, Button, Carousel } from 'react-bootstrap'
import "../styles/projects.css"
import Ecommerce from "../videos/Ecommerce.mp4"
import pokedex from "../videos/pokedex.mp4"
import RickAndMorty from "../videos/RickAndMorty.mp4"
import users from "../videos/users.mp4"

const Projects = () => {
    return (
        <Container className="projects">
            <Row>
                <Col>
                    <h1 style={{ display: "flex", justifyContent: "center" }}>
                        <span>P</span>
                        <span>r</span>
                        <span>o</span>
                        <span>j</span>
                        <span>e</span>
                        <span>c</span>
                        <span>t</span>
                        <span>s</span>
                    </h1>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Carousel style={{ width: "500px", padding: "60px" }}>
                            <Carousel.Item>
                                <Card >
                                    <video src={Ecommerce} autoPlay muted></video>
                                    <Card.Body>
                                        <Card.Title className="text-info">E-commerce - React</Card.Title>
                                        <Card.Text style={{ marginTop: "30px", color: "white"  }}>
                                            Using Products API, i deployed them and gave functionallity to be able to buy the products, send them to a purchases cart, do a checkout and get a purchases history. The products have a section in which I show the detail of them, suggested products and a quantity of products to add.
                                            This is possible only if you login or register in the website.
                                        </Card.Text>
                                        <div style={{display: 'flex', justifyContent: "flex-end"}}>
                                            <Button variant="outline-info"><a href="https://ecommerce-bycrhis.netlify.app/#/" target="_blank" rel="noreferrer">See Project</a></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card>
                                    <video src={RickAndMorty} autoPlay muted></video>
                                    <Card.Body>
                                        <Card.Title className="text-info">Rick And Morty - React</Card.Title>
                                        <Card.Text style={{ marginTop: "30px", color: "white" }}>
                                            Using Rick and Morty's API, I deployed the characters from a random location. Here is a pagination for the characters from each of the locations and a search input by location.
                                        </Card.Text>
                                        <div style={{display: 'flex', justifyContent: "flex-end"}}>
                                            <Button variant="outline-info"><a href="https://rickandmorty-bycrhis.netlify.app/" target="_blank" rel="noreferrer">See Project</a></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card>
                                    <video src={pokedex} autoPlay muted></video>
                                    <Card.Body>
                                        <Card.Title className="text-info">PokeDex - React</Card.Title>
                                        <Card.Text style={{ marginTop: "30px", color: "white"  }}>
                                            Using Pokemons API, i deployed them and gave functionallity to look at their stats, movements, and more details of the Pokemon.
                                            The pokemons are paginated and you can filter them by type.
                                        </Card.Text>
                                        <div style={{display: 'flex', justifyContent: "flex-end"}}>
                                            <Button variant="outline-info"><a href="https://pokedex-bycrhis.netlify.app/" target="_blank" rel="noreferrer">See Project</a></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card>
                                    <video src={users} autoPlay muted></video>
                                    <Card.Body>
                                        <Card.Title className="text-info">User CRUD - React</Card.Title>
                                        <Card.Text style={{ marginTop: "30px", color: "white"  }}>
                                            Using Users API, you can create a new user through a form and be able to delete it, edit it or reset the form if you select the wrong to edit or you decided to do not edit it. All users are listed in a table.
                                        </Card.Text>
                                        <div style={{display: 'flex', justifyContent: "flex-end"}}>
                                            <Button variant="outline-info"><a href="https://users-crud-bycrhis.netlify.app/" target="_blank" rel="noreferrer">See Project</a></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;