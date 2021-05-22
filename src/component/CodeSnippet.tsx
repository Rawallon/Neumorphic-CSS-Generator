import React from 'react';
import { createShades } from '../utils';

interface CodeSnippetProps {
  radius: number;
  shape: number;
  background: string;
  intensity: number;
  blur: number;
  dist: number;
}

export default function CodeSnippet({
  radius,
  shape,
  background,
  intensity,
  blur,
  dist,
}: CodeSnippetProps) {

  function bgColor(shape: number): string {
    switch (shape) {
      default:
      case 3:
      case 0:
        return background;
      case 1:
        return `linear-gradient(145deg, ${createShades(background,0.1 * -1,)}, ${createShades(background, 0.1)});`;
      case 2:
        return `linear-gradient(145deg, ${createShades(background,0.1,)}, ${createShades(background, 0.1 * -1)});`;
    }
  }
  return (
    <div className="code neu">
      <span>border-radius: </span> {radius}px;
      <br />
      <span>background: </span> {bgColor(shape)}
      <br />
      <span>box-shadow:</span> {shape === 3 && 'inset'} {dist}px {dist}px {blur}px {createShades(background, intensity * -1).split('-')[0]},
      <br />
      {shape === 3 && 'inset'} -{dist}px -{dist}px {blur}px {createShades(background, intensity).split('-')[0]};
      <br />
    </div>
  );
}

export const MemoCodeSnippet = React.memo(CodeSnippet)