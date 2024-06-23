import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useEffect } from "react";
import { useState } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  let [letterClass, setletterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Hello, and welcome to my portfolio! I'm Pranav Vinodh, a passionate
            and driven{" "}
            <strong>machine learning and Front-end enthusiast </strong>
            currently pursuing my <strong>B.tech in IT</strong> at the National
            Institute of Technology Karnataka (NITK). My academic journey and
            hands-on experience in the realm of data science,artificial
            intelligence and Front-end development have equipped me with a
            robust foundation in machine learning algorithms, data analysis,
            predictive modeling along with the ability to make eye-catching
            websites that integrate Machine Learning and much more.
          </p>
          <p>
            On this website, you'll find a showcase of my projects, a detailed
            resume, and insights into my academic and professional achievements.
            Whether it's a deep dive into a neural network architecture, an
            exploration of natural language processing techniques, or an
            innovative approach to solving real-world problems using machine
            learning, my portfolio is a testament to my dedication and skill in
            this exciting field.
          </p>
          <p>
            I'm always eager to connect with fellow enthusiasts, researchers,
            and professionals who share a passion for machine learning and
            Front-end development. Feel free to explore my work and reach out if
            you'd like to collaborate or discuss any aspect of my journey. Let's
            push the boundaries of what's possible with technology, together.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
