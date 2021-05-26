import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  createShades,
  getColorVariations,
  getFontColor,
  getShadowSide,
  isValidColor,
} from './utils';

type StateContextData = {
  size: number;
  setSize: (value: number) => void;
  borderRadius: number;
  setBorderRadius: (value: number) => void;
  distance: number;
  setDistance: (value: number) => void;
  intensity: number;
  setIntensity: (value: number) => void;
  blur: number;
  setBlur: (value: number) => void;
  selectedColor: string;
  setSelectedColor: (value: string) => void;
  angle: number;
  setAngle: (value: number) => void;
  style: number;
  setStyle: (value: number) => void;
};

export const StateContext = createContext({} as StateContextData);

type stateContextProviderProps = {
  children: ReactNode;
};

export function StateContextProvider({ children }: stateContextProviderProps) {
  const [angle, setAngle] = useState(0);
  const [style, setStyle] = useState(0);

  const [size, setSize] = useState(300);
  const [borderRadius, setBorderRadius] = useState(50);
  const [distance, setDistance] = useState(20);
  const [intensity, setIntensity] = useState(0.15);
  const [blur, setBlur] = useState(60);
  const [selectedColor, setColorInState] = useState('#efeeee');

  function setSelectedColor(color: string) {
    if (isValidColor(color)) {
      setColorInState(color);
    }
  }

  useEffect(() => {
    const { selectedTop, selectedBottom } = getColorVariations(
      selectedColor,
      style,
    );

    const {
      positionX,
      positionY,
      positionXOpposite,
      positionYOpposite,
      angleDeg,
    } = getShadowSide(distance, angle);
    document.documentElement.style.cssText = `
    --selectedColor: ${selectedColor};
    --selectedColorTop: ${selectedTop};
    --selectedColorBottom: ${selectedBottom};
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
  ]);

  useEffect(() => {
    let nDist = distance * 2;
    if (nDist >= 5 && nDist <= 50) setBlur(nDist);
  }, [distance, setBlur]);

  useEffect(() => {
    let nSize = Math.floor(size / 10);
    if (nSize >= 5 && nSize <= 50) setDistance(nSize);
  }, [size, setDistance]);

  return (
    <StateContext.Provider
      value={{
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
        angle,
        setAngle,
        style,
        setStyle,
      }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => {
  return useContext(StateContext);
};
