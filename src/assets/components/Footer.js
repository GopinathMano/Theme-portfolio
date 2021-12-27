import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center bg-dark">
      <SocialLinks  />
      <p className="lead my-3 text-white">
        &copy; Made with <span>♥️</span> by{" "}
        <a
          id="myInfo"
          href="https://github.com/GopinathMano"
          target="_blank"
          rel="noreferrer"
        >
          Gopinath Manohar
        </a>
      </p>
    </footer>
  );
};

export default Footer;
