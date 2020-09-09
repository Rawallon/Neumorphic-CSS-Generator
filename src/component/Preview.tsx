import React, { useEffect } from "react";
import "./Preview.css";

interface props {
  size: number;
  radius: number;
  shape: number;
  angle: number;
  setAngle: (n: number) => void;
}

export const Preview: React.FC<props> = ({
  size,
  radius,
  shape,
  angle,
  setAngle,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--size", String(size) + "px");
    document.documentElement.style.setProperty(
      "--radius",
      String(radius) + "px"
    );
  }, [size, radius]);
  return (
    <div className="preview">
      <button className={`leftU${angle === 0 ? " activeA" : ""}`} onClick={() => setAngle(0)}></button>
      <button className={`rightU${angle === 1 ? " activeA" : ""}`} onClick={() => setAngle(1)}></button>
      <button className={`rightD${angle === 2 ? " activeA" : ""}`} onClick={() => setAngle(2)}></button>
      <button className={`leftD${angle === 3 ? " activeA" : ""}`} onClick={() => setAngle(3)}></button>
      <div className={`box${shape === 3 ? " pressed" : ""}`}></div>
    </div>
  );
};
