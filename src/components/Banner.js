import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { BrowserRouter as Router } from "react-router-dom";
import "animate.css";
import headerImg from "../assets/img/wf-banner.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Data Analyst"];
  const [text, setText] = useState("");
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.5);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} lg={7}>
              <span className="tagline">Welcome to my portfolio!</span>
              <div className="banner-title">
                <h1>
                  {/* {`I'm a `} */}
                  <span className="wrap">Hi! I'm Due from White Fluff</span>
                </h1>
              </div>
              <p>
                I started building websites when I was 15 years old. Now I'm 27.
                A lot of things happened throughout these years, and I've been
                around 10 of them away from the IT area. Until this year. <br />
                Nowadays, I'm using React, JavaScript and TypeScript to develop
                some projects, while I still study new stuff (like NextJS).
                Besides, I'm also a Music Producer. I compose, make my beats,
                write my lyrics and produce the whole song.
              </p>
              <div className="banner-link">
                <a href="#skills">
                  <button>
                    Tell me more about that
                    <ArrowRightCircle size={25} />
                  </button>
                </a>
              </div>
            </Col>
            <Col className="img-banner" xs={12} md={6} lg={5}>
              <img src={headerImg} alt="Header"></img>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
