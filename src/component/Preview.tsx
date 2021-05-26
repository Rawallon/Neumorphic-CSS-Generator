import React from 'react';
import './Preview.css';

interface Props {
  style: number;
  angle: number;
  setAngle: (n: number) => void;
}

export function Preview({ style, angle, setAngle }: Props) {
  return (
    <div className="preview">
      <button
        className={`leftU${angle === 0 ? ' activeAngle' : ''}`}
        onClick={() => setAngle(0)}></button>
      <button
        className={`rightU${angle === 1 ? ' activeAngle' : ''}`}
        onClick={() => setAngle(1)}></button>
      <button
        className={`rightD${angle === 2 ? ' activeAngle' : ''}`}
        onClick={() => setAngle(2)}></button>
      <button
        className={`leftD${angle === 3 ? ' activeAngle' : ''}`}
        onClick={() => setAngle(3)}></button>
      <div className={`box${style === 3 ? ' pressed' : ''}`}></div>
    </div>
  );
}
