import "./index.scss";
import LogoP from "../../assets/images/logo-p.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import pfp from "../../assets/images/pfp.jpeg";
const Home = () => {
  let [letterClass, setletterClass] = useState("text-animate");
  const nameArray = [
    "r",
    "a",
    "n",
    "a",
    "v",
    " ",
    "v",
    "i",
    "n",
    "o",
    "d",
    "h",
    ",",
  ];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];
  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoP} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={1}
          ></AnimatedLetters>
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={13}
          ></AnimatedLetters>
        </h1>
        <h2>Frontend developer / Aspiring Machine Learning Engineer</h2>
        <h2>S for Success!</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        <Logo></Logo>
      </div>
      <img className="pfp" src={pfp} />
    </div>
  );
};
export default Home;
