import React from 'react';

interface SliderProps {
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
}: SliderProps) {
  return (
    <>
      <label htmlFor="size">{title}</label>
      <input
        className="slider"
        id={title}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}></input>
      <span className="value">
        {value} {px && 'px'}
      </span>
    </>
  );
}

export const MemoSlider = React.memo(Slider);
