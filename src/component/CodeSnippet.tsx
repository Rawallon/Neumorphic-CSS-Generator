import React from 'react';
import { useStateContext } from '../StateContext';
import { createShades } from '../utils';

export default function CodeSnippet() {
  const { borderRadius, distance, intensity, blur, selectedColor, style } =
    useStateContext();

  function bgColor(style: number): string {
    switch (style) {
      default:
      case 3:
      case 0:
        return selectedColor;
      case 1:
        return `linear-gradient(145deg, ${createShades(
          selectedColor,
          0.1 * -1,
        )}, ${createShades(selectedColor, 0.1)});`;
      case 2:
        return `linear-gradient(145deg, ${createShades(
          selectedColor,
          0.1,
        )}, ${createShades(selectedColor, 0.1 * -1)});`;
    }
  }
  return (
    <div className="code neu">
      <span>border-border-radius: </span> {borderRadius}px;
      <br />
      <span>background: </span> {bgColor(style)}
      <br />
      <span>box-shadow:</span> {style === 3 && 'inset'} {distance}px {distance}
      px {blur}px {createShades(selectedColor, intensity * -1).split('-')[0]},
      <br />
      {style === 3 && 'inset'} -{distance}px -{distance}px {blur}px{' '}
      {createShades(selectedColor, intensity).split('-')[0]};
      <br />
    </div>
  );
}

export const MemoCodeSnippet = React.memo(CodeSnippet);
