import React, { useEffect, useState } from 'react';
import {
  createShades,
  getFontColor,
  getShadowSide,
  isValidColor,
} from '../utils';
import ShapeSwitcher from './ShapeSwitcher';
import CodeSnippet from './CodeSnippet';
import Slider from './Slider';

interface Props {
  angle: number;
  shape: number;
  setShape: (value: number) => void;
}
export function Configurator({ angle, shape, setShape }: Props) {
  const [size, setSize] = useState(300);
  const [radius, setRadius] = useState(50);
  const [dist, setDist] = useState(20);
  const [intensity, setIntensity] = useState(0.15);
  const [blur, setBlur] = useState(60);
  const [background, setBackground] = useState('#efeeee');
  const [bgInput, setBgInput] = useState(background);

  useEffect(() => {
    var bgFirst, bgSecond;
    if (shape === 0) {
      bgFirst = background;
      bgSecond = background;
    } else if (shape === 1) {
      bgFirst = createShades(background, 0.1 * -1);
      bgSecond = createShades(background, 0.1);
    } else if (shape === 2) {
      bgFirst = createShades(background, 0.1);
      bgSecond = createShades(background, 0.1 * -1);
    }

    const {
      positionX,
      positionY,
      positionXOpposite,
      positionYOpposite,
      angleDeg,
    } = getShadowSide(dist, angle);

    document.documentElement.style.cssText = `
    --background: ${background};
    --backgroundFirst: ${bgFirst};
    --backgroundSecond: ${bgSecond};
    --blur: ${blur}px;
    --angle: ${angleDeg};
    --positionX: ${positionX}px;
    --positionY: ${positionY}px;
    --positionXOpposite: ${positionXOpposite}px;
    --positionYOpposite: ${positionYOpposite}px;
    --size: ${size}px;
    --radius:${radius}px;
    --intensityL: ${createShades(background, intensity)};
    --intensityD: ${createShades(background, intensity * -1)};
    --intensityS: ${createShades(background, (intensity - 0.7) * -1)};
    --intensityB: ${createShades(background, intensity - 0.15)};
    --intensityBaa: ${getFontColor(background)}
    `;
  }, [background, dist, intensity, blur, shape, size, radius, angle]);

  function setBgHandler(color: string) {
    setBgInput(color);
    if (isValidColor(color)) {
      setBackground(color);
    }
  }

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
          value={background}
          onChange={(e) => setBgHandler(e.target.value)}></input>
        <input
          type="text"
          id="head"
          name="head"
          value={bgInput}
          onChange={(e) => setBgHandler(e.target.value)}></input>
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
      </div>

      <ShapeSwitcher shape={shape} setShape={setShape} />

      <CodeSnippet
        radius={radius}
        shape={shape}
        background={background}
        intensity={intensity}
        blur={blur}
        dist={dist}
      />
    </div>
  );
}
