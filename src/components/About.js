import React from "react";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, est non consectetur fermentum, velit velit consectetur
            ipsum, vel consectetur neque velit vel velit.
          </p>
          <ul>
            <li>Full Stack Developer</li>
            <li>Experienced in Java, React, Node.js, and other web technologies</li>
            <li>Passionate about learning and sharing knowledge</li>
          </ul>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};


export default About;