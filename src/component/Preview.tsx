import React, { useEffect } from 'react';
import './Preview.css';

interface Props {
  shape: number;
  angle: number;
  setAngle: (n: number) => void;
}

export function Preview({ shape, angle, setAngle }: Props) {
  return (
    <div className="preview">
      <button
        className={`leftU${angle === 0 ? ' activeA' : ''}`}
        onClick={() => setAngle(0)}></button>
      <button
        className={`rightU${angle === 1 ? ' activeA' : ''}`}
        onClick={() => setAngle(1)}></button>
      <button
        className={`rightD${angle === 2 ? ' activeA' : ''}`}
        onClick={() => setAngle(2)}></button>
      <button
        className={`leftD${angle === 3 ? ' activeA' : ''}`}
        onClick={() => setAngle(3)}></button>
      <div className={`box${shape === 3 ? ' pressed' : ''}`}></div>
    </div>
  );
}
