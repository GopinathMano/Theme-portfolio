// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown,FaLink } from "react-icons/fa";
import NavBar from "../containers/NavBar";
import SocialLinks from "./SocialLinks";
import {  Button } from "react-bootstrap";

// Image

const About = ({ theme, setTheme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

 

  return (
    <header id="about" className={newTheme}>
      <NavBar theme={theme} setTheme={setTheme} />
      <div className="container text-center">
        <h1>Gopinath M</h1>
        <hr />
        <h3>About</h3>
        <p>
          I'm a passionate Full stack developer with the goal of working on a
          project that solves problems with thoughtful UI design, creating
          intuitive, dynamic user experiences powered by strong backend. I
          primarily work with MERN stack among the full stack technologies. The
          satisfaction that I get while working and completing every project
          made me do more and more. And I believe, I have did something
          creatively.
        </p>
        <Button><a href="https://drive.google.com/file/d/1sQTaN9_ZMZX7U9JnalVos2GGUqD-lIMq/view?usp=sharing"><FaLink/>  Resume</a></Button>
        <SocialLinks />
        <Link className="scroll" to="skills" smooth={true} duration={750}> 
          <FaChevronCircleDown id="scroll-down" />
        </Link>
      </div>
    </header>
  );
};

export default About;
