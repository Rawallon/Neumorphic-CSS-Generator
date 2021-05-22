import React, { useState } from 'react';
import './App.css';
import { MemoConfigurator } from './component/Configurator';
import { Preview } from './component/Preview';

function App() {
  const [angle, setAngle] = useState(0);
  const [shape, setShape] = useState(0);

  return (
    <div className="App">
      <MemoConfigurator angle={angle} shape={shape} setShape={setShape} />
      <Preview shape={shape} angle={angle} setAngle={setAngle} />
    </div>
  );
}

export default App;
