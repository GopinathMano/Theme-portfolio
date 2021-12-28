// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FiMail } from "react-icons/fi";
import { FaChevronCircleUp } from "react-icons/fa";
import { contactInfo } from "../../data";
import man from "../images/man.png";

const mail = `mailto:${contactInfo.email}`;
const phone = `tel:${contactInfo.phone}`;

const Contact = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column justify-content-center`;

  return (
    <section id="contact" className={newTheme}>
      <div className="container text-center">
        <h2>Contact</h2>
        <hr />
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={man} alt="gopinath" />
          </div>
          <div className="col-lg-6">
            <h3>Gopinath Manohar</h3>
            {contactInfo.email && contactInfo.email !== "" ? (
              <a href={mail}>
                📧E-mail: <span>{contactInfo.email}</span>
              </a>
            ) : (
              ""
            )}
            <br />
            {contactInfo.phone && contactInfo.phone !== "" ? (
              <a href={phone}>
                📱Phone: <span>{contactInfo.phone}</span>
              </a>
            ) : (
              ""
            )}
            {(!contactInfo.email || contactInfo.email === "") &&
            (!contactInfo.phone || contactInfo.phone === "") ? (
              <a href={contactInfo.mailChimp} target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-secondary btn-lg">
                  <FiMail /> Contact me
                </button>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <Link className="scroll" to="about" smooth={true} duration={750}>
          <FaChevronCircleUp id="scroll-up" />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
