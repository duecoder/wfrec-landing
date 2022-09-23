import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import projImg1 from "../assets/img/project-shoppingcart.png";
import projImg2 from "../assets/img/project-exercisesjs.png";
import projImg3 from "../assets/img/project-todolist.png";
import projImg4 from "../assets/img/project-spotify.png";
import projImg5 from "../assets/img/project-youtube.png";
import projImg6 from "../assets/img/project-ableton.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects1 = [
    {
      title: "Shopping Carts",
      description: "Sell your products online",
      imgUrl: projImg1,
      link: "https://github.com/duecoder/react-vite-ts-shoppingcart",
    },
    {
      title: "JavaScript Exercises",
      description: "Useful scripts",
      imgUrl: projImg2,
      link: "https://github.com/duecoder/JavaScript-Exercises",
    },
    {
      title: "React Projects",
      description: "Plenty of React projects (check GitHub for more)",
      imgUrl: projImg3,
      link: "https://github.com/duecoder?tab=repositories",
    },
  ];

  const projects2 = [
    {
      title: "Spotify",
      description: "Plenty of songs on Spotify",
      imgUrl: projImg4,
      link: "https://open.spotify.com/artist/7f7nVMllFmPbELFha911Oy",
    },
    {
      title: "YouTube",
      description: "Plenty of songs on YouTube",
      imgUrl: projImg5,
      link: "https://www.youtube.com/channel/UCkk23qvCkUiyBoXARjn8kNA",
    },
    {
      title: "Mixing and Mastering",
      description: "Vast experience with Ableton",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container className="text-center">
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              In this section, I've splitted my portfolio into two tabs. One for
              the IT projects, and the other for the Music ones.
              <br />
              For both areas, you can see more from either my Instagram (music
              side) or my GitHub (coding side). Both links are located at the
              navbar or at the bottom.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Music Producing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Web Developing</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="project-links">
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="project-links">
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bg-right"
      ></img>
    </section>
  );
};
