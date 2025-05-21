import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

import CamTest from "./CamTest.jsx";
import JulianTest from "./julian_test.jsx";

import { Canvas } from "@react-three/fiber";
export default function Experience() {
  return (
    <div class=" flex justify-center" className="Test">
      <Scene1 className="h-screen bg-neutral-700" />

      <div className="h-screen flex items-center bg-purple-600 justify-center">
        <div className="w-1/2 text-center">
          <h1 className="font-bold text-3xl text-wrap">
            {"PFAS IS A DANGEROUS SUBSTANCE THAT THREATENS ALL LIFE ON EARTH"}
          </h1>
        </div>
      </div>
      <Scene2 className="h-screen" />
    </div>
  );
}

function Scene1({ className }) {
  return (
    <div className={className}>
      <Canvas shadows>
        <Perf position="top-left" />

        <ScrollControls damping={0.2} pages={2}>
          <JulianTest />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
function Scene2({ className }) {
  return (
    <div className={className}>
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
        </ScrollControls>
      </Canvas>
    </div>
  );
}
