import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";

import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas camera={{ position: [0, 0, 2] }}>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={0x00ff00} wireframe />
        <Stats />
      </mesh>
    </Canvas>
  </StrictMode>
);
