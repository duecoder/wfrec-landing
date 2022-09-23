import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as Instagram } from "../assets/img/insta.svg";
import { ReactComponent as Linkedin } from "../assets/img/linkedin.svg";
import { ReactComponent as GitHub } from "../assets/img/github.svg";
import wfLogo from "../assets/img/wf-logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={wfLogo} alt="logo" id="duelogo" className="logo-footer" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/dueprod/">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/in/eduardodue/">
                <Linkedin fill="white" />
              </a>
              <a href="https://github.com/duecoder">
                <GitHub fill="white" />
              </a>
            </div>
            <p>Due | White Fluff - CopyRight 2022.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
