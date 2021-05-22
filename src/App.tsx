import React, { useState, useEffect } from 'react';
import './App.css';
import { Configurator } from './component/Configurator';
import { Preview } from './component/Preview';
import { createShades, getFontColor, getShadowSide } from './utils';

function App() {
  const [size, setSize] = useState(300);
  const [radius, setRadius] = useState(50);
  const [dist, setDist] = useState(20);
  const [intensity, setIntensity] = useState(0.15);
  const [blur, setBlur] = useState(60);
  const [background, setBackground] = useState('#efeeee');
  const [bgInput, setBgInput] = useState(background);
  const [shape, setShape] = useState(0);
  const [angle, setAngle] = useState(0);

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

  const setBG = (color: string) => {
    setBgInput(color);
    color.length === 7 && color.charAt(0) === '#'
      ? setBackground(color)
      : setBgInput(color);
  };

  return (
    <div className="App">
      <Configurator
        size={size}
        setSize={setSize}
        bg={background}
        setBg={setBackground}
        bgGF={shape > 0 ? createShades(background, 0.1 * -1) : background}
        bgGS={shape > 0 ? createShades(background, 0.1) : background}
        bgInput={bgInput}
        setBgInput={setBG}
        radius={radius}
        setRadius={setRadius}
        dist={dist}
        setDist={setDist}
        intensity={intensity}
        setIntensity={setIntensity}
        blur={blur}
        setBlur={setBlur}
        colors={
          createShades(background, intensity) +
          '-' +
          createShades(background, intensity * -1)
        }
        shape={shape}
        setShape={setShape}
      />
      <Preview
        size={size}
        radius={radius}
        shape={shape}
        angle={angle}
        setAngle={setAngle}
      />
    </div>
  );
}

export default App;
