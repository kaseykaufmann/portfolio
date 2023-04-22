import { useEffect, useState } from "react";

const text =
  "Hello and welcome to my portfolio website! My name is Kasey Kaufmann, and I am a Software Engineer in Frontend Software Development.";

const About = ({ offset }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (number < text.split(" ").length) {
        setNumber((prevNum) => prevNum + 1);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []); // eslint-disable-line

  return (
    <div className="about" id="about">
      <div
        className="row"
        style={{
          height: "90%",
          alignItems: "center",
        }}
      >
        <div className="col">
          <h1
            style={{
              transform: `translate(-${offset < 25 ? offset : 25}%, ${
                offset < 60 ? -(offset * 6) : offset - 1000
              }px)`,
            }}
          >
            Kasey Kaufmann
          </h1>
        </div>
        <div className="col">
          {text.split(" ").slice(0, number).join(" ")}
          {number < text.length && (number % 4 === 1 || number === 0) ? (
            <div
              style={{
                background: "black",
                width: "min-content",
                display: "inline",
              }}
            >
              ?
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
