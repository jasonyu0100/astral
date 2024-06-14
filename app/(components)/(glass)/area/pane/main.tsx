interface GlassAreaPaneProps {
  glassFx?: string;
}

export function GlassAreaPane({ glassFx: glassFx }: GlassAreaPaneProps) {
  return (
    <div
      className={`absolute left-0 top-0 h-full w-full flex-shrink-0 ${glassFx}`}
    ></div>
  );
}
