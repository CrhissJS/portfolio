import React from 'react';
import "../styles/home.css"
import { Button, Col, Row, Container } from 'react-bootstrap'
import me from "../images/me.jpg"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container className="home">
            <Row>
                <Col >
                    <img className="my-picture" style={{ width: "350px", borderRadius: "50%", border: "10px solid white", marginTop: "25px" }} src={me} alt="" />
                </Col>
                <Col className="mt-5" xl={6} >
                    <h1>
                        <span>C</span>
                        <span>r</span>
                        <span>h</span>
                        <span>i</span>
                        <span>s</span>
                        <span>t</span>
                        <span>i</span>
                        <span>a</span>
                        <span>n</span>
                        <span className="lastname">R</span>
                        <span>a</span>
                        <span>m</span>
                        <span>i</span>
                        <span>r</span>
                        <span>e</span>
                        <span>z</span>
                        <br />
                        <span>F</span>
                        <span>r</span>
                        <span>o</span>
                        <span>n</span>
                        <span>t</span>
                        <span>-</span>
                        <span>E</span>
                        <span>n</span>
                        <span>d</span>
                        <span className="lastname">D</span>
                        <span>e</span>
                        <span>v</span>
                        <span>e</span>
                        <span>l</span>
                        <span>o</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                    </h1>
                </Col>
                <Row>
                        <Col>
                            <div style={{ marginTop: "150px", display: "grid", gridTemplateAreas: "header header", gridTemplateColumns: "1fr 1fr"}}>
                                <Button onClick={() => navigate("/about-me")} style={{ width: "500px", fontSize: "40px", padding: "20px", border: "none", borderLeft: "1px solid", borderRight: "1px solid", color: "white", boxShadow: "0 1px 10px 4px white", marginBottom: "40px" }} variant="outline-light">About Me</Button>
                                <Button style={{ width: "100%", fontSize: "40px", padding: "20px", border: "none", borderLeft: "1px solid", borderRight: "1px solid", color: "white", boxShadow: "0 1px 10px 4px white", marginBottom: "40px" }} variant="outline-light"><a href="https://drive.google.com/uc?id=1U77cfiEIJl_CCmgfcLdmPVRablsdHgT5&export=download">Download CV</a></Button>
                            </div>                        
                                <Button onClick={() => navigate("/contact-me")} style={{width: "100%", fontSize: "40px", padding: "20px", border: "none", borderLeft: "1px solid", borderRight: "1px solid", color: "white", boxShadow: "0 1px 10px 4px white" }} variant="outline-light">Contact Me</Button>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "50px"}}>
                        <div style={{display: "flex", gap: "5%", justifyContent: "center"}}>
                            <a href="https://www.linkedin.com/in/crhistian-ram%C3%ADrez-aaa6901bb/" target="_blank"><i style={{fontSize: "50px"}} className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/CrhissJS" target="_blank"><i style={{fontSize: "50px"}} className="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/crhistianrl/" target="_blank"><i style={{fontSize: "50px"}} className="fa-brands fa-instagram"></i></a>
                        </div>
                    </Row>
            </Row>
        </Container>
    );
};

export default Home;