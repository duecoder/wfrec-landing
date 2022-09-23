import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {/* eslint-disable-next-line */}
      <a href={link ? link : "javascript:void(0);"}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="card-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
