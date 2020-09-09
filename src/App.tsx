import React, { useState, useEffect } from "react";
import "./App.css";
import { Configurator } from "./component/Configurator";
import { Preview } from "./component/Preview";

function createShades(col: string, amt: number) {
  let hex: string = String(col).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * amt), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
}

function App() {
  const [size, setSize] = useState(300);
  const [radius, setRadius] = useState(50);
  const [dist, setDist] = useState(20);
  const [intensity, setIntensity] = useState(0.15);
  const [blur, setBlur] = useState(60);
  const [background, setBackground] = useState("#000");
  const [bgInput, setBgInput] = useState(background);
  const [shape, setShape] = useState(0);
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    document.documentElement.style.setProperty("--background", background);
    if (shape === 0 || shape === 402) {
      document.documentElement.style.setProperty(
        "--backgroundFirst",
        background
      );
      document.documentElement.style.setProperty(
        "--backgroundSecond",
        background
      );
    } else if (shape === 1) {
      document.documentElement.style.setProperty(
        "--backgroundFirst",
        createShades(background, 0.1 * -1)
      );
      document.documentElement.style.setProperty(
        "--backgroundSecond",
        createShades(background, 0.1)
      );
    } else if (shape === 2) {
      document.documentElement.style.setProperty(
        "--backgroundFirst",
        createShades(background, 0.1)
      );
      document.documentElement.style.setProperty(
        "--backgroundSecond",
        createShades(background, 0.1 * -1)
      );
    }

    document.documentElement.style.setProperty("--blur", String(blur) + "px");
    document.documentElement.style.setProperty(
      "--positionX",
      String(dist) + "px"
    );
    document.documentElement.style.setProperty(
      "--positionY",
      String(dist) + "px"
    );
    document.documentElement.style.setProperty(
      "--positionXOpposite",
      "-" + String(dist) + "px"
    );
    document.documentElement.style.setProperty(
      "--positionYOpposite",
      "-" + String(dist) + "px"
    );
    document.documentElement.style.setProperty(
      "--intensityL",
      createShades(background, intensity)
    );
    document.documentElement.style.setProperty(
      "--intensityD",
      createShades(background, intensity * -1)
    );
    document.documentElement.style.setProperty(
      "--intensityS",
      createShades(background, (intensity - 0.7)  * -1)
    );
    document.documentElement.style.setProperty(
      "--intensityB",
      createShades(background, intensity - 0.15 )
    );
    if(background.toString().charAt(1) == "1" || background.toString().charAt(1) == "0" )
    document.documentElement.style.setProperty("--intensityBaa", "#fff");
    else if(background.toString().charAt(1) == "f" || background.toString().charAt(1) == "e"  || background.toString().charAt(1) == "d"  || background.toString().charAt(1) == "b" )
    document.documentElement.style.setProperty("--intensityBaa", "#000");
    else
    document.documentElement.style.setProperty("--intensityBaa", createShades(background, 0.7));
    
  }, [background, dist, intensity, blur, shape]);

  
  
  useEffect(() => {

    switch (angle) {
      case 0:
        document.documentElement.style.setProperty("--positionX",String(dist) + "px");
        document.documentElement.style.setProperty("--positionY",String(dist) + "px");
        document.documentElement.style.setProperty("--positionXOpposite","-" + String(dist) + "px");
        document.documentElement.style.setProperty("--positionYOpposite","-" + String(dist) + "px");
        document.documentElement.style.setProperty("--angle","145deg");
        break;
      case 1:
        document.documentElement.style.setProperty("--positionX","-"+String(dist) + "px");
        document.documentElement.style.setProperty("--positionY",String(dist) + "px");
        document.documentElement.style.setProperty("--positionXOpposite", String(dist) + "px");
        document.documentElement.style.setProperty("--positionYOpposite","-" + String(dist) + "px");
        document.documentElement.style.setProperty("--angle","225deg");
        break;
      case 2:
        document.documentElement.style.setProperty("--positionX","-" +String(dist) + "px");
        document.documentElement.style.setProperty("--positionY","-" +String(dist) + "px");
        document.documentElement.style.setProperty("--positionXOpposite",String(dist) + "px");
        document.documentElement.style.setProperty("--positionYOpposite",String(dist) + "px");
        document.documentElement.style.setProperty("--angle","315deg");
        break;
      case 3:
        document.documentElement.style.setProperty("--positionX",String(dist) + "px");
        document.documentElement.style.setProperty("--positionY","-" + String(dist) + "px");
        document.documentElement.style.setProperty("--positionXOpposite","-" + String(dist) + "px");
        document.documentElement.style.setProperty("--positionYOpposite",String(dist) + "px");
        document.documentElement.style.setProperty("--angle","45deg");
        break;
    
      default:
        document.documentElement.style.setProperty("--angle",
          "145deg"
        );
        break;
    }
  }, [angle])

  const setBG = (color: string) => {
    setBgInput(color);
    color.length === 7 && color.charAt(0) === "#"
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
          "-" +
          createShades(background, intensity * -1)
        }
        shape={shape}
        setShape={setShape}
      />
      <Preview size={size} radius={radius} shape={shape} angle={angle} setAngle={setAngle} />
    </div>
  );
}

export default App;
