// https://react-icons.github.io/react-icons/
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {


  return (
    <>
      <div className="social-links">
        <a href="https://github.com/GopinathMano" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

         <a
         className="mx-5"
          href="https://www.linkedin.com/in/gopimano1996/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>

        

       
      </div>
    </>
  );
};

export default SocialLinks;
