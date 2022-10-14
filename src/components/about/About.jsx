import React from "react";
import me from "../../assets/me.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="parent">
        <div className="child">
          <h1>Hi, I'm Aurrel.</h1>
          <h2>I love to build amazing apps.</h2>
          {<br></br>}
          <p>
            A motivated web developer looking for opportunities in Berlin. I
            have experience in writing simple frontend applications in React and
            Node.js as backend connected to a MongoDB database. Currently, I'm
            working towards becoming a Junior Frontend Engineer. I'm looking for
            an internship which would allow me to get more experience in my
            field.
          </p>
          {<br></br>}

          <a href="#contact">
            {" "}
            <button> Work with me </button>
          </a>
          <a href="#projects">
            {" "}
            <button className="btn"> My projects </button>
          </a>
        </div>
        <div className="child">
          <img alt="me" src={me} />
          {/* <p>Te dua</p> */}
        </div>
      </div>
    </section>
  );
}
