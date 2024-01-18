import localFont from 'next/font/local';

export const creatoThin = localFont({
  src: './font/CreatoDisplay-Thin.otf',
  variable: '--font-creato-thin',
});

export const creatoLight = localFont({
  src: './font/CreatoDisplay-Light.otf',
  variable: '--font-creato-light',
});

export const creatoRegular = localFont({
  src: './font/CreatoDisplay-Regular.otf',
  variable: '--font-creato-regular',
});

export const creatoMedium = localFont({
  src: './font/CreatoDisplay-Medium.otf',
  variable: '--font-creato-medium',
});

export const creatoBold = localFont({
  src: './font/CreatoDisplay-Bold.otf',
  variable: '--font-creato-bold',
});

export const creatoExtraBold = localFont({
  src: './font/CreatoDisplay-ExtraBold.otf',
  variable: '--font-creato-extraBold',
});

export const creatoBlack = localFont({
  src: './font/CreatoDisplay-Black.otf',
  variable: '--font-creato-black',
});

export const permanentMarker = localFont({
  src: './font/PermanentMarker.ttf',
  variable: '--font-marker',
});

export const fontVariables = [
  creatoThin.variable,
  creatoLight.variable,
  creatoRegular.variable,
  creatoMedium.variable,
  creatoBold.variable,
  creatoExtraBold.variable,
  creatoBlack.variable,
  permanentMarker.variable,
];
