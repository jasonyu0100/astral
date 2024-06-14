import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';

export function SeaMain({ children }: { children?: React.ReactNode }) {
  return (
    <GlassWindowFrame
      name={SeaMain.name}
      className={`flex h-full  flex-grow flex-col p-[2rem] `}
    >
      <div className='flex flex-col overflow-auto'>{children}</div>
    </GlassWindowFrame>
  );
}
