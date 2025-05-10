import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Model from "./Model.jsx";
import Hamburger from "./Hamburger.jsx";
import Placeholder from "./Placeholder.jsx";
import Fox from "./Fox.jsx";
import CamTest from "./CamTest.jsx";
import JulianTest from "./julian_test.jsx";
import { Scene } from "three";
import { Canvas } from "@react-three/fiber";
export default function Experience() {
  return (
    <div className="Test">
      <Scene1 />

      {/* <Fox scale={0.03} position={[-2.5, 0, 2.5]} rotation-y={0.3} />
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <Hamburger scale={0.4} position-x={3} />
      </Suspense> */}
      <h1>{"FICK JA"} </h1>
      <Scene2 />
    </div>
  );
}

function Scene1() {
  return (
    <Canvas shadows>
      <Perf position="top-left" />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1.5} />
      <ScrollControls damping={0.2} pages={2}>
        {/* <CamTest position-y={4} /> */}
        <JulianTest />
      </ScrollControls>
    </Canvas>
  );
}
function Scene2() {
  return (
    <Canvas shadows>
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1.5} />
      <ScrollControls damping={0.2} pages={2}>
        <CamTest position-y={4} />
        {/* <JulianTest /> */}
      </ScrollControls>
    </Canvas>
  );
}
