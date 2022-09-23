import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import wfLogo from "../assets/img/wf-logo.png";
import { ReactComponent as Instagram } from "../assets/img/insta.svg";
import { ReactComponent as Linkedin } from "../assets/img/linkedin.svg";
import { ReactComponent as GitHub } from "../assets/img/github.svg";
import "../App.css";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={wfLogo} alt="logo" id="duelogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.instagram.com/dueprod/">
                  <Instagram
                    fill="white"
                    style={{ filter: "drop-shadow(5px 5px 5px #222)" }}
                  />
                </a>
                <a href="https://www.linkedin.com/in/eduardodue/">
                  <Linkedin
                    fill="white"
                    style={{ filter: "drop-shadow(5px 5px 5px #222)" }}
                  />
                </a>
                <a href="https://github.com/duecoder">
                  <GitHub
                    fill="white"
                    style={{
                      filter: "drop-shadow(5px 5px 5px #222)",
                    }}
                  />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Talk to Me</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
