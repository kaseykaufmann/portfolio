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
  return (
    <div className="App">
      <Header />
      <div className="body">
        <About />
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
