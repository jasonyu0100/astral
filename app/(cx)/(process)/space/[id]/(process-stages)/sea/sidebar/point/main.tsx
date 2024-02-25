import { backgroundStyles, borderStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';

export function SeaPoint({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={SeaPoint.name}
      sizeStyle='w-full h-[150px]'
      className='p-[2rem] text-white'
    >
      {children}
    </GlassContainer>
  );
}
