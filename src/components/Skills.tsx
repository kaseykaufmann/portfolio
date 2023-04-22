import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { TrackballControls, Image, Text } from "@react-three/drei";

const JavaScriptLogo = require("../logos/JavaScript-logo.png");
const TypeScriptLogo = require("../logos/Typescript-logo.png");
const ReactLogo = require("../logos/React-icon.png");
const ReduxLogo = require("../logos/redux-logo.png");
const MaterialUiLogo = require("../logos/material-ui-logo.png");
const IonicLogo = require("../logos/ionic-logo.png");
const JavaLogo = require("../logos/java-logo.png");
const NodeLogo = require("../logos/node-logo.jpg");
const FirebaseLogo = require("../logos/firebase-logo.png");
const BootstrapLogo = require("../logos/Bootstrap-logo.png");
const ApolloLogo = require("../logos/apollo-logo.png");
const UnityLogo = require("../logos/unity-logo.png");
const GatsbyLogo = require("../logos/gatsby-logo.jpg");
const NetlifyLogo = require("../logos/netlify-logo.png");
const CLogo = require("../logos/C++_Logo.png");

const Word = ({ url, position, text }) => {
  const ref = useRef<any>();

  const [onHover, setOnHover] = useState(false);

  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);
  });
  return (
    <Image
      ref={ref}
      url={url}
      position={position}
      scale={7}
      onPointerOver={() => setOnHover(true)}
      onPointerOut={() => setOnHover(false)}
      children={
        <Text
          anchorY="bottom"
          visible={onHover}
          scale={0.5}
          outlineColor="rgb(100, 100, 100)"
          outlineWidth={0.25}
          outlineBlur={2}
          lineHeight={3}
          children={text}
        />
      }
    />
  );
};

const Skills = () => {
  const words = [
    { logo: JavaScriptLogo, text: "JavaScript" },
    { logo: TypeScriptLogo, text: "TypeScript" },
    { logo: ReactLogo, text: "React" },
    { logo: ReduxLogo, text: "Redux" },
    { logo: MaterialUiLogo, text: "MaterialUi" },
    { logo: IonicLogo, text: "Ionic" },
    { logo: JavaLogo, text: "Java" },
    { logo: NodeLogo, text: "Node" },
    { logo: FirebaseLogo, text: "Firebase" },
    { logo: BootstrapLogo, text: "Bootstrap" },
    { logo: ApolloLogo, text: "Apollo" },
    { logo: UnityLogo, text: "Unity" },
    { logo: GatsbyLogo, text: "Gatsby" },
    { logo: NetlifyLogo, text: "Netlify" },
    { logo: CLogo, text: "C" },
  ];
  const radius = 50;
  const temp: any = [];
  const spherical = new THREE.Spherical();
  const phiSpan = Math.PI / (words.length + 1);
  const thetaSpan = (Math.PI * 2) / words.length;
  for (let i = 3; i < words.length; i += 3) {
    for (let j = 0; j < words.length; j += 1) {
      temp.push([
        new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * i * 45, thetaSpan * j)
        ),
        words[j],
      ]);
    }
  }

  return (
    <div className="skills" id="skills">
      <Canvas
        camera={{ position: [0, 0, 45], fov: 90 }}
        style={{ height: 700, borderRadius: "100%" }}
      >
        {temp.map(([pos, { logo, text }], index) => (
          <Word key={index} position={pos} url={logo} text={text} />
        ))}
        <TrackballControls noZoom />
      </Canvas>
    </div>
  );
};

export default Skills;
