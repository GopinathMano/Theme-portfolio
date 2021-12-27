// https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNpm,
  FaGitAlt,
  FaGithubSquare,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";




/*  GitHub username below
 ************************************************************** */
export const githubUsername = "GopinathMano";

/* Skills
 ************************************************************** */
// Add or remove skills in the SAME format below, there must be one icon imported above per skill below and 3 skills per row
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "Bootstrap",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <FaNodeJs className="display-4" />,
    name: "NodeJs",
  },
  {
    id: 7,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 8,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 9,
    skill: <FaNpm className="display-4" />,
    name: "npm",
  },
];





/* Contact Info
 ************************************************************** */
// Share the contact info you are comfortable with (no dashes for phone numbers)
// If no info provided a button with a link to mailchimp will be rendered, update the link if you want to use this option
export const contactInfo = {
  email: "gopimano4242@gmail.com",
  phone: "6380625165",
};
