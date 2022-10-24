import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/aboutMe.css";

const AboutMe = () => {
  return (
    <Container className="aboutMe">
      <Row>
        <Col>
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
            <span className="lastname">M</span>
            <span>e</span>
          </h1>
          <div
            style={{
              marginTop: "50px",
              border: "1px solid purple",
              padding: "40px",
              marginBottom: "50px",
            }}
          >
            <p style={{ fontSize: "40px", textAlign: "center" }}>
              Colombian front-end developer with extensive experience in
              responsive website designs development using HTML, CSS and
              Javascript, and development of APIs for websites with React. I
              focus on innovating and learning about new technologies, I like to
              be an analytical person who focuses on quick problem solving.
            </p>
          </div>
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            <span>T</span>
            <span>e</span>
            <span>c</span>
            <span>h</span>
            <span>n</span>
            <span>o</span>
            <span>l</span>
            <span>o</span>
            <span>g</span>
            <span>i</span>
            <span>e</span>
            <span>s</span>
          </h1>

          <div
            style={{
              marginTop: "50px",
              border: "1px solid purple",
              padding: "40px",
              marginBottom: "50px",
            }}
          >
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "5px",
                    background: "white",
                    height: "40px",
                  }}
                ></div>
                <i
                  style={{
                    fontSize: "40px",
                    marginLeft: "5px",
                    color: "orangered",
                  }}
                  className="fa-brands fa-html5"
                >
                  {" "}
                  HTML5
                </i>{" "}
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "5px",
                    background: "white",
                    height: "40px",
                  }}
                ></div>
                <i
                  style={{
                    fontSize: "40px",
                    marginLeft: "5px",
                    color: "dodgerblue",
                  }}
                  className="fa-brands fa-css3-alt"
                >
                  {" "}
                  CSS3
                </i>{" "}
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "5px",
                    background: "white",
                    height: "40px",
                  }}
                ></div>
                <i
                  style={{
                    fontSize: "40px",
                    marginLeft: "5px",
                    color: "yellow",
                  }}
                  className="fa-brands fa-js"
                >
                  {" "}
                  JavaScript
                </i>{" "}
              </div>
              <div style={{ display: "flex", marginTop: "30px" }}>
                <div
                  style={{
                    width: "5px",
                    background: "white",
                    height: "40px",
                  }}
                ></div>
                <i
                  style={{
                    fontSize: "40px",
                    marginLeft: "5px",
                    color: "lightskyblue",
                  }}
                  className="fa-brands fa-react"
                >
                  {" "}
                  React
                </i>{" "}
              </div>
              <div style={{ display: "flex", marginTop: "30px" }}>
                <div
                  style={{
                    width: "5px",
                    background: "white",
                    height: "40px",
                  }}
                ></div>
                <i
                  style={{
                    fontSize: "40px",
                    marginLeft: "5px",
                    color: "indigo",
                  }}
                  className="fa-brands fa-bootstrap"
                >
                  {" "}
                  Bootstrap
                </i>{" "}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
