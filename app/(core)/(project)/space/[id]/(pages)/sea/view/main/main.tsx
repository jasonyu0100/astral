import { GlassWindowFrame } from '@/(components)/(glass)/window/main';

export function SpaceSeaMain({ children }: { children?: React.ReactNode }) {
  return (
    <GlassWindowFrame
      name={SpaceSeaMain.name}
      className={`flex h-full flex-grow flex-col p-[2rem] `}
    >
      {children}
    </GlassWindowFrame>
  );
}
