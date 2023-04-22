import { useEffect, useMemo, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

import About from "./components/About";
import Experience from "./components/Experience";
// import Goals from "./components/Goals";
// import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./App.scss";

const App = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [x, y, w] = useMemo(() => {
    // Beginning settings for portfolio
    let xPos = 90;
    let yPos = 40;
    let width = 50;

    // Skills settings
    if (offset < 850 && offset > 40) {
      if (width < 800) {
        width += offset / 21;
      }
      if (xPos > 6 || xPos < 19) {
        xPos -= offset / 10;
      }
      if (yPos < 120) {
        yPos += offset / 10;
      }
    }
    if (offset > 850) {
      width = 90;
      xPos = 6;
      yPos = 120;
    }

    return [xPos, yPos, width];
  }, [offset]);

  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          transform: `translate(${x}%, ${y}%)`,
          zIndex: -1,
          height: `${w}%`,
          width: `${w}%`,
          borderRadius: "100%",
          backgroundColor: "white",
        }}
      />
      <Header offset={offset} />
      <div className="body">
        <About offset={offset} />
        <Skills />
        <Experience />
        <Projects />
        {/* <Hobbies />
        <Goals /> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
