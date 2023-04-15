const LinkedInLogo = require("../logos/linkedIn-logo.png");
const GitHubLogo = require("../logos/GitHub-logo.png");

const Footer = () => {
  return (
    <footer id="contact">
      <h2>Contact</h2>
      <div className="row">
        <a href="https://www.linkedin.com/in/kaseykaufmann/">
          <img src={LinkedInLogo} alt="LinkedIn" width={75} />
        </a>
        <a href="https://github.com/kaseykaufmann/">
          <img src={GitHubLogo} alt="Github" />
        </a>
      </div>
      <h3>(239)777-0754 - kaseykaufmann@yahoo.com</h3>
    </footer>
  );
};

export default Footer;
