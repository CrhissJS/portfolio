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
                    <img className="my-picture" style={{ width: "450px", borderRadius: "100%", border: "10px solid white", marginTop: "100px" }} src={me} alt="" />
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

                    <Row>
                        <div style={{ marginTop: "150px" }}>
                            <Button onClick={() => navigate("/about-me")} style={{ width: "500px", fontSize: "40px", padding: "20px", border: "none", borderLeft: "1px solid", borderRight: "1px solid", color: "white", boxShadow: "0 1px 10px 4px white", marginBottom: "40px" }} variant="outline-light">About Me</Button>
                            <Button style={{ width: "500px", fontSize: "40px", padding: "20px", border: "none", borderLeft: "1px solid", borderRight: "1px solid", color: "white", boxShadow: "0 1px 10px 4px white", marginBottom: "40px" }} variant="outline-light"><a href="https://export-download.canva.com/La1XE/DAFJu8La1XE/57/0-33290116139.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20220819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220819T071909Z&X-Amz-Expires=61087&X-Amz-Signature=e38f0d968aaed1f09c9d80f876245c5993231213eca5226c913f0ef1dca7d624&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Curriculum%2520Crhistian.pdf&response-expires=Sat%2C%2020%20Aug%202022%2000%3A17%3A16%20GMT">Download CV</a></Button>
                            <Button onClick={() => navigate("/contact-me")} style={{ width: "500px", fontSize: "40px", padding: "20px", border: "none", borderLeft: "1px solid", borderRight: "1px solid", color: "white", boxShadow: "0 1px 10px 4px white" }} variant="outline-light">Contact Me</Button>
                        </div>                        
                    </Row>
                    <Row style={{marginTop: "50px"}}>
                        <div style={{display: "flex", gap: "11rem"}}>
                            <a href="https://www.linkedin.com/in/crhistian-ram%C3%ADrez-aaa6901bb/" target="_blank"><i style={{fontSize: "50px"}} className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/CrhissJS" target="_blank"><i style={{fontSize: "50px"}} className="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/crhistianrl/" target="_blank"><i style={{fontSize: "50px"}} className="fa-brands fa-instagram"></i></a>
                        </div>
                    </Row>
                </Col>

            </Row>
        </Container>
    );
};

export default Home;