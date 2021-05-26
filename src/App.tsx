import React from 'react';
import './App.css';
import { MemoConfigurator } from './component/Configurator';
import { Preview } from './component/Preview';

function App() {
  return (
    <div className="App">
      <MemoConfigurator />
      <Preview />
    </div>
  );
}

export default App;
