export const isValidColor = (hex: string) => /^#[0-9A-F]{6}$/i.test(hex);

export function createShades(col: string, amt: number): string {
  let hex: string = String(col).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var rgb = '#',
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * amt), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }
  return rgb;
}

export function getFontColor(hex: string): string {
  const hexChar = hex.toString().charAt(1);
  if (hexChar === '1' || hexChar === '0') {
    return '#fffff';
  } else if (hexChar === 'f' || hexChar === 'e' || hexChar === 'd') {
    return '#00000';
  } else {
    return createShades(hex, 0.7);
  }
}
interface getShadowSideReturn {
  positionX: number;
  positionY: number;
  positionXOpposite: number;
  positionYOpposite: number;
  angleDeg: string;
}
export function getShadowSide(
  dist: number,
  angle: number,
): getShadowSideReturn {
  switch (angle) {
    default:
    case 0:
      return {
        positionX: dist,
        positionY: dist,
        positionXOpposite: dist * -1,
        positionYOpposite: dist * -1,
        angleDeg: '145deg',
      };
    case 1:
      return {
        positionX: dist * -1,
        positionY: dist,
        positionXOpposite: dist,
        positionYOpposite: dist * -1,
        angleDeg: '225deg',
      };
    case 2:
      return {
        positionX: dist * -1,
        positionY: dist * -1,
        positionXOpposite: dist,
        positionYOpposite: dist,
        angleDeg: '315deg',
      };
    case 3:
      return {
        positionX: dist,
        positionY: dist * -1,
        positionXOpposite: dist * -1,
        positionYOpposite: dist,
        angleDeg: '45deg',
      };
  }
}

export function getColorVariations(selectedColor: string, style: number): any {
  switch (style) {
    default:
    case 0:
      return { selectedTop: selectedColor, selectedBottom: selectedColor };
    case 1:
      return {
        selectedTop: createShades(selectedColor, 0.1 * -1),
        selectedBottom: createShades(selectedColor, 0.1),
      };
    case 2:
      return {
        selectedTop: createShades(selectedColor, 0.1),
        selectedBottom: createShades(selectedColor, 0.1 * -1),
      };
  }
}
