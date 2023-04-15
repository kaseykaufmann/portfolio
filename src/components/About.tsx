import { useEffect, useState } from "react";

const text =
  "Hello and welcome to my portfolio website! My name is Kasey Kaufmann, and I am a Software Engineer in Frontend Software Development.";

const About = () => {
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
      <h2>About</h2>
      {text.split(" ").slice(0, number).join(" ")}
      {number < text.length && number % 4 === 1 ? (
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
  );
};

export default About;
