import emailjs from "emailjs-com";

const LinkedInLogo = require("../logos/linkedIn-logo.png");
const GitHubLogo = require("../logos/GitHub-logo.png");

const Footer = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ia39qoq",
        "template_slsp3tw",
        e.target,
        "DIC6caDh-mj1a61mH"
      )
      .then(
        () => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer id="contact">
      <form onSubmit={onSubmit}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" id="from_name" name="from_name" required />
        <label>Email</label>
        <input type="email" id="from_email" name="from_email" required />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea
          id="html_message"
          name="html_message"
          rows={5}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="row">
        <a href="https://www.linkedin.com/in/kaseykaufmann/">
          <img src={LinkedInLogo} alt="LinkedIn" width={75} />
        </a>
        <h3>(239)777-0754 - kaseykaufmann7@gmail.com</h3>
        <a href="https://github.com/kaseykaufmann/">
          <img src={GitHubLogo} alt="Github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
