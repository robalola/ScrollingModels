import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

export default function Fox(props) {
  const fox = useGLTF("./Fox/glTF/Fox.gltf");
  const animations = useAnimations(fox.animations, fox.scene);

  const { animationName } = useControls({
    animationName: { options: animations.names },
  });

  useEffect(
    function () {
      const actions = animations.actions[animationName];
      actions.reset().fadeIn(0.5).play();

      return () => {
        actions.fadeOut(0.5);
      };
    },
    [animationName]
  );

  return <primitive {...props} object={fox.scene} />;
}

useGLTF.preload("./Fox/glTF/Fox.gltf");
