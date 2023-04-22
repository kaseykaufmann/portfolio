const Header = ({ offset }) => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      {offset > 58 && <h1>Kasey Kaufmann</h1>}
      <nav
        className="row"
        style={{
          minWidth: 600,
          width: `calc(100% - ${offset * 6}px)`,
          float: "right",
        }}
      >
        <button
          className="col"
          onClick={() => handleClickScroll("about")}
          style={{
            backgroundColor: offset >= 0 && offset < 700 ? "red" : "",
          }}
        >
          About
        </button>
        <button
          className="col"
          onClick={() => handleClickScroll("skills")}
          style={{
            backgroundColor: offset > 700 && offset < 1400 ? "red" : "",
          }}
        >
          Skills
        </button>
        <button
          className="col"
          onClick={() => handleClickScroll("experience")}
          style={{
            backgroundColor: offset > 1400 && offset < 2200 ? "red" : "",
          }}
        >
          Experience
        </button>
        <button
          className="col"
          onClick={() => handleClickScroll("projects")}
          style={{
            backgroundColor: offset > 2200 && offset < 2900 ? "red" : "",
          }}
        >
          Projects
        </button>
        <button
          className="col"
          onClick={() => handleClickScroll("contact")}
          style={{
            backgroundColor: offset > 2900 && offset < 3600 ? "red" : "",
          }}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
