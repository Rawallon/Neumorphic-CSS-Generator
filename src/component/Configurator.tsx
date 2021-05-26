import React, { useEffect, useRef, useState } from 'react';
import {
  createShades,
  getFontColor,
  getShadowSide,
  isValidColor,
} from '../utils';
import { MemoStyleSwitcher } from './StyleSwitcher';
import { MemoCodeSnippet } from './CodeSnippet';
import { MemoSlider } from './Slider';

interface Props {
  angle: number;
  style: number;
  setStyle: (value: number) => void;
}
export function Configurator({ angle, style, setStyle }: Props) {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [size, setSize] = useState(300);
  const [borderRadius, setBorderRadius] = useState(50);
  const [distance, setDistance] = useState(20);
  const [intensity, setIntensity] = useState(0.15);
  const [blur, setBlur] = useState(60);
  const [selectedColor, setSelectedColor] = useState('#efeeee');

  useEffect(() => {
    inputRef.current.value = selectedColor;
    var bgFirst, bgSecond;
    if (style === 0) {
      bgFirst = selectedColor;
      bgSecond = selectedColor;
    } else if (style === 1) {
      bgFirst = createShades(selectedColor, 0.1 * -1);
      bgSecond = createShades(selectedColor, 0.1);
    } else if (style === 2) {
      bgFirst = createShades(selectedColor, 0.1);
      bgSecond = createShades(selectedColor, 0.1 * -1);
    }

    const {
      positionX,
      positionY,
      positionXOpposite,
      positionYOpposite,
      angleDeg,
    } = getShadowSide(distance, angle);
    document.documentElement.style.cssText = `
    --selectedColor: ${selectedColor};
    --selectedColorTop: ${bgFirst};
    --selectedColorBottom: ${bgSecond};
    --blur: ${blur}px;
    --angle: ${angleDeg};
    --positionX: ${positionX}px;
    --positionY: ${positionY}px;
    --positionXOpposite: ${positionXOpposite}px;
    --positionYOpposite: ${positionYOpposite}px;
    --size: ${size}px;
    --radius:${borderRadius}px;
    --shadowLight: ${createShades(selectedColor, intensity)};
    --shadowDark: ${createShades(selectedColor, intensity * -1)};
    --accentPrimary: ${createShades(selectedColor, (intensity - 0.7) * -1)};
    --accentSecondary: ${createShades(selectedColor, intensity - 0.15)};
    --fontColor: ${getFontColor(selectedColor)} 
    `;
  }, [
    selectedColor,
    distance,
    intensity,
    blur,
    style,
    size,
    borderRadius,
    angle,
    inputRef,
  ]);

  function setBgHandler(color: string) {
    if (isValidColor(color)) {
      setSelectedColor(color);
    }
  }

  useEffect(() => {
    let nDist = distance * 2;
    if (nDist >= 5 && nDist <= 50) setBlur(nDist);
  }, [distance, setBlur]);

  useEffect(() => {
    let nSize = Math.floor(size / 10);
    if (nSize >= 5 && nSize <= 50) setDistance(nSize);
  }, [size, setDistance]);

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
          onChange={(e) => setBgHandler(e.target.value)}></input>
        <input
          type="text"
          id="head"
          name="head"
          ref={inputRef}
          onChange={(e) => setBgHandler(e.target.value)}></input>
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

      <MemoStyleSwitcher style={style} setStyle={setStyle} />

      <MemoCodeSnippet
        borderRadius={borderRadius}
        style={style}
        selectedColor={selectedColor}
        intensity={intensity}
        blur={blur}
        distance={distance}
      />
    </div>
  );
}

export const MemoConfigurator = React.memo(Configurator);
