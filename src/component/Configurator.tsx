import React, { useEffect } from "react";
import Slider from "./Slider";

interface Props {
  bg: string;
  bgGF: string;
  bgGS: string;
  setBg: (n: string) => void;
  bgInput: string;
  setBgInput: (n: string) => void;
  size: number;
  setSize: (n: number) => void;
  radius: number;
  setRadius: (n: number) => void;
  dist: number;
  setDist: (n: number) => void;
  intensity: number;
  setIntensity: (n: number) => void;
  blur: number;
  setBlur: (n: number) => void;
  colors: string;
  shape: number;
  setShape: (n: number) => void;
}
export const Configurator: React.FC<Props> = ({
  size,
  setSize,
  bg,
  bgGF,
  bgGS,
  setBg,
  bgInput,
  setBgInput,
  radius,
  setRadius,
  dist,
  setDist,
  intensity,
  setIntensity,
  blur,
  setBlur,
  colors,
  shape,
  setShape,
}: Props) => {
  useEffect(() => {
    let nDist = dist * 2;
    if (nDist >= 5 && nDist <= 50) setBlur(nDist);
  }, [dist, setBlur]);

  useEffect(() => {
    let nSize = Math.floor(size / 10);
    if (nSize >= 5 && nSize <= 50) setDist(nSize);
  }, [size, setDist]);

  return (
    <div className="conf">
      <div className="row">
        <label htmlFor="head">Color</label>
        <span></span>
        <input
          type="color"
          id="head"
          name="head"
          value={bg}
          onChange={(e) => {
            setBg(e.target.value);
            setBgInput(e.target.value);
          }}
        ></input>
        <input
          type="text"
          id="head"
          name="head"
          value={bgInput}
          onChange={(e) => setBgInput(e.target.value)}
        ></input>
      </div>
      <div className="row">
        <Slider
          title="size"
          value={size}
          onChange={setSize}
          min={10}
          max={400}
        />
      </div>
      <div className="row">
        <Slider
          title="radius"
          value={radius}
          onChange={setRadius}
          min={0}
          max={size / 2}
        />
      </div>
      <div className="row">
        <Slider
          title="distance"
          value={dist}
          onChange={setDist}
          min={5}
          max={50}
        />
      </div>
      <div className="row">
        <Slider
          title="strength"
          value={intensity}
          onChange={setIntensity}
          step={0.01}
          min={0.01}
          max={0.6}
          px={false}
        />
      </div>
      <div className="row">
        <Slider
          title="blur"
          value={blur}
          onChange={setBlur}
          min={0}
          max={100}
        />
        <label className="lbl" htmlFor="dist">
          blur
        </label>
      </div>

      <div className="row">
        <div className="shape-switch">
          <button
            className={shape === 0 ? "active" : ""}
            onClick={() => setShape(0)}
            data-shape="0"
            name="flat"
            title="Flat"
          >
            <svg viewBox="0 0 145 24" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 22H7C15.2843 22 22 15.2843 22 7.00001V3C22 2.44772 22.4477 2 23 2H121C121.552 2 122 2.44772 122 3V7.00001C122 15.2843 128.716 22 137 22H145" stroke="inherit"strokeWidth="6"></path>
            </svg>
          </button>
          <button
            className={shape === 1 ? "active" : ""}
            onClick={() => setShape(1)}
            data-shape="1"
            name="pressed"
            title="Pressed"
          >
            <svg
              viewBox="0 0 145 24"
              fill="none"
              stroke="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2H22V21C22 21.5523 22.4477 22 23 22H121C121.552 22 122 21.5523 122 21V2H145"
                stroke="inherit"
                strokeWidth="6"
              ></path>
            </svg>
          </button>

          <button
            className={shape === 2 ? "active" : ""}
            onClick={() => setShape(2)}
            data-shape="2"
            name="concave"
            title="Concave"
          >
            <svg
              viewBox="0 0 145 24"
              fill="none"
              stroke="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 22H7C15.2843 22 22 15.2843 22 7.00001V3.39336C22 2.7091 22.6808 2.2299 23.3304 2.44485C59.2066 14.3156 85.7767 12.9047 120.7 2.39438C121.343 2.20072 122 2.67921 122 3.3512V7.00001C122 15.2843 128.716 22 137 22H145"
                stroke="inherit"
                strokeWidth="6"
              ></path>
            </svg>
          </button>
          <button
            className={shape === 3 ? "active" : ""}
            onClick={() => setShape(3)}
            data-shape="3"
            name="convex"
            title="Convex"
          >
            <svg
              viewBox="0 0 145 33"
              fill="none"
              stroke="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 31H7C15.2843 31 22 24.2843 22 16V11.7329C22 11.2966 22.2898 10.9083 22.7061 10.7779C60.0722 -0.924818 84.913 -0.925978 121.302 10.7745C121.714 10.9071 122 11.2935 122 11.727V16C122 24.2843 128.716 31 137 31H145"
                stroke="inherit"
                strokeWidth="6"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="code neu">
        <span>border-radius: </span>
        {radius}px;
        <br />
        <span>background: </span>
        {(shape === 0 || shape === 3) && "" + bg + ";"}
        {shape === 1 && "linear-gradient(145deg, " + bgGF + ", " + bgGS + ");"}
        {shape === 2 && "linear-gradient(145deg, " + bgGS + ", " + bgGF + ");"}
        <br />
        <span>box-shadow:</span> {dist}px {dist}px {blur}px{" "}{colors.split("-")[0]},<br />
        -{dist}px -{dist}px {blur}px{" "}{colors.split("-")[1]};<br />
      </div>
    </div>
  );
};
