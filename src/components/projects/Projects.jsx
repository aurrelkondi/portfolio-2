import styled from "styled-components";
import { BiCodeAlt } from "react-icons/bi";
import React from "react";
import { projects } from "../../data";

export default function Projects() {
  return (
    <AboutContainer>
      <div className="page-content">
        <BiCodeAlt />
        <h1>Apps I've Built</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ratione nisi, repudiandae aperiam et ipsam amet aliquid corporis iusto
          deserunt consequuntur voluptas iure placeat aliquam sequi dicta. Illo,
          necessitatibus placeat.
        </p>
      </div>
      <div className="my-projects">
        {projects.map((project) => (
          <a href={project.link} key={project.image}>
            <div className="gallery">
              <img src={project.image} alt="gallery-1" />
              <div className="description">
                <h2 className="project-subtitle">{project.subtitle}</h2>
                <h1 className="project-title">{project.title}</h1>
                <p className="description">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  .page-content {
    text-align: center;
    border: 1px solid red;
    margin: 200px;
  }
  h1 {
    margin-top: 10px;
  }
  p {
    padding-top: 10px;
  }
  .my-projects {
    display: flex;
    flex-wrap: wrap;
  }
  .gallery {
    display: flex;
    position: relative;
    border: 1px solid red;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .project-title {
    text: large;
  }
`;
