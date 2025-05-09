import { Clone, useGLTF } from "@react-three/drei";

export default function Model() {
  const model = useGLTF("./hamburger.glb");

  return <Clone object={model.scene} scale={0.35} />;
}

useGLTF.preload("./hamburger.glb");
