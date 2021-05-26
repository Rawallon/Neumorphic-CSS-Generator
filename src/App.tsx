import React, { useState } from 'react';
import './App.css';
import { MemoConfigurator } from './component/Configurator';
import { Preview } from './component/Preview';

function App() {
  const [angle, setAngle] = useState(0);
  const [style, setStyle] = useState(0);

  return (
    <div className="App">
      <MemoConfigurator angle={angle} style={style} setStyle={setStyle} />
      <Preview style={style} angle={angle} setAngle={setAngle} />
    </div>
  );
}

export default App;
