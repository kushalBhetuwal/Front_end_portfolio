import { Html, useProgress } from "@react-three/drei";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 24,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(3)}% Loading.....
      </p>
    </Html>
  );
};

export default CanvasLoader;
