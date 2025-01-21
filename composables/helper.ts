export function useAsset(path: string): string {
    const assets = import.meta.glob('~/assets/images/*', {
      eager: true,
      import: 'default',
    })

    return assets[`/assets/${path}`] as string
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function makeSoftColor(color: string, percentage = 0.5) {
  // Ambil nilai RGB dari warna HEX
  const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
  };

  // Campurkan dengan putih
  const { r, g, b } = hexToRgb(color);
  const mix = (value: number) => Math.round(value + (255 - value) * percentage);
  const softR = mix(r);
  const softG = mix(g);
  const softB = mix(b);

  return `rgb(${softR}, ${softG}, ${softB})`;
}