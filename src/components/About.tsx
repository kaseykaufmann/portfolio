import { useEffect, useState } from "react";

const text = `My name is Kasey Kaufmann. I am a graduate from the University of Florida with a bachelor’s degree in Computer Science and a minor in Digital Arts. 
I enjoy being challenged and engaging with projects that require me to work outside my comfort zone, as well as my current knowledge. As enclosed in my resume, I am currently working as a Frontend Software Engineer overhauling a 25 year old software using React and other popular libraries, collaborating with management and other ends of development to build modern and clean UI/UX. Before that, I was in college, building experience with multiple shadowing programs and internships. Some of the work I have done ranges from developing and presenting a project along with observing team meetings, to searching for bugs in current software.
Outside of my regular work, I have been developing a mobile training app using a base stack of Firebase, Express, Node and React with several other technologies. It is deployed on the app store under the name Traineraid. The main function of the app is to build workouts, and then create chats with other users and share those workouts with friends. The idea was started when I created a regular chat through text with my own friends in an effort to help motivate them to consistently exercise and improve.
I enjoy working on software and technology in general when it can lead to some good for the people who use it. I believe it inspires more purpose and desire to take initiative when there is an intrinsic purpose in a project. That is why after looking at the job description and your company, I know I can excel at my role.`;

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
