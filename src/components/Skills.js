import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactLogo from "../assets/img/react.png";
import javaScriptLogo from "../assets/img/javascript.png";
import typeScriptLogo from "../assets/img/typescript.png";
import pythonLogo from "../assets/img/python.png";
import beatsLogo from "../assets/img/beats.png";
import mixingLogo from "../assets/img/mixing.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Down below I decided to show the skills I'm most acquainted to.
                It goes from the IT to the Music Producing knowledge.
                <br />
                By the time I learned web developing, I was using HTML and CSS.
                Today, I use HTML5 and CSS3, but most of my projects are made
                with React/JSX, and JavaScript or TypeScript. On the music side,
                I dominate the whole song process: composition, arrangement,
                recording, mixing and mastering.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={reactLogo} alt="Meter" />
                  <h5>React and JSX</h5>
                </div>
                <div className="item">
                  <img src={javaScriptLogo} alt="Meter" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={typeScriptLogo} alt="Meter" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={pythonLogo} alt="Meter" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={beatsLogo} alt="Meter" />
                  <h5>Beats and arrangements</h5>
                </div>
                <div className="item">
                  <img src={mixingLogo} alt="Meter" />
                  <h5>Mixing and Mastering</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bgsharp" />
    </section>
  );
};
