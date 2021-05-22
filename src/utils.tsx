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
