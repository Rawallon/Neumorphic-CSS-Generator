import React, { useEffect, useRef } from 'react';
import { MemoStyleSwitcher } from './StyleSwitcher';
import { MemoCodeSnippet } from './CodeSnippet';
import { MemoSlider } from './Slider';
import { useStateContext } from '../StateContext';

export function Configurator() {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const {
    size,
    setSize,
    borderRadius,
    setBorderRadius,
    distance,
    setDistance,
    intensity,
    setIntensity,
    blur,
    setBlur,
    selectedColor,
    setSelectedColor,
  } = useStateContext();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = selectedColor;
    }
  }, [inputRef, selectedColor]);

  return (
    <div className="configurator">
      <div className="row">
        <label htmlFor="head">Color</label>
        <span></span>
        <input
          type="color"
          id="head"
          name="head"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}></input>
        <input
          type="text"
          id="head"
          name="head"
          ref={inputRef}
          onChange={(e) => setSelectedColor(e.target.value)}></input>
      </div>
      <div className="row">
        <MemoSlider
          title="size"
          value={size}
          onChange={setSize}
          min={10}
          max={400}
        />
      </div>
      <div className="row">
        <MemoSlider
          title="radius"
          value={borderRadius}
          onChange={setBorderRadius}
          min={0}
          max={size / 2}
        />
      </div>
      <div className="row">
        <MemoSlider
          title="distance"
          value={distance}
          onChange={setDistance}
          min={5}
          max={50}
        />
      </div>
      <div className="row">
        <MemoSlider
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
        <MemoSlider
          title="blur"
          value={blur}
          onChange={setBlur}
          min={0}
          max={100}
        />
      </div>

      <MemoStyleSwitcher />

      <MemoCodeSnippet />
    </div>
  );
}

export const MemoConfigurator = React.memo(Configurator);
