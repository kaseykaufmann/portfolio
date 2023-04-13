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
        <button onClick={() => handleClickScroll("about")}>About</button>
        <button onClick={() => handleClickScroll("skills")}>Skills</button>
        <button onClick={() => handleClickScroll("experience")}>
          Experience
        </button>
        <button onClick={() => handleClickScroll("projects")}>Projects</button>
        <button onClick={() => handleClickScroll("contact")}>Contact</button>
        {/* <button onClick={() => handleClickScroll("hobbies")}>Hobbies</button>
        <button onClick={() => handleClickScroll("goals")}>Goals</button> */}
      </nav>
    </header>
  );
};

export default Header;
