const Header = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <h1>Kasey Kaufmann</h1>
      <nav>
        <button
          className="header-about"
          onClick={() => handleClickScroll("about")}
        >
          About
        </button>
        <button
          className="header-skills"
          onClick={() => handleClickScroll("skills")}
        >
          Skills
        </button>
        <button
          className="header-experience"
          onClick={() => handleClickScroll("experience")}
        >
          Experience
        </button>
        <button
          className="header-projects"
          onClick={() => handleClickScroll("projects")}
        >
          Projects
        </button>
        <button
          className="header-contact"
          onClick={() => handleClickScroll("contact")}
        >
          Contact
        </button>
        {/* <button onClick={() => handleClickScroll("hobbies")}>Hobbies</button>
        <button onClick={() => handleClickScroll("goals")}>Goals</button> */}
      </nav>
    </header>
  );
};

export default Header;
