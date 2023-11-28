export interface GlassProps {
  width: number;
  height: number;
  borderStyle?: string;
  classStyle?: string;
  backgroundStyle?: string;
  children?: React.ReactNode;
}

export const defaultBackground = `bg-slate-200 bg-opacity-5 backdrop-blur-[20px]`;
export const defaultGlassBorder = `border border-slate-200 border-opacity-30 rounded-md`;
export const sharpGlassBorder = `border-slate-200 border-opacity-30`;

export function GlassContainer({
  width,
  height,
  borderStyle,
  classStyle,
  backgroundStyle,
  children,
}: GlassProps) {
  const style = `
    w-[${width}px] h-[${height}px] 
    ${borderStyle ? borderStyle : defaultGlassBorder}
    ${backgroundStyle ? backgroundStyle : defaultBackground}
    ${classStyle ? classStyle : ""}
    flex-shrink-0
  `;

  return <div className={style}>{children}</div>;
}
