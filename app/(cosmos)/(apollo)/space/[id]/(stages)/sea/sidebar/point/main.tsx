import { backgroundStyles, borderStyles } from '@/(common)/styles/data';
import { Layer } from '@/(common)/layer/main';

export function SeaPoint({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={SeaPoint.name}
      sizeStyle='w-full h-[150px]'
      className='p-[2rem] text-white'
    >
      {children}
    </Layer>
  );
}
