import React from "react";

interface Props {
  title: string;
  value: any;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step?: number;
  px?: boolean;
}

export default function Slider({
  title,
  value,
  onChange,
  min,
  max,
  step = 1,
  px = true,
}: Props) {
  return (
    <>
      <label className="lbl" htmlFor="size">
        {title}
      </label>
      <input
        className="slider"
        id={title}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      ></input>
      <span className="stat">
        {value} {px && "px"}
      </span>
    </>
  );
}
