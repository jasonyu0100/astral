import { glassStyles, borderStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';

export function SharePoint({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={SharePoint.name}
      sizeStyle='w-full h-[150px]'
      className='p-[2rem] text-white'
    >
      {children}
    </GlassAreaContainer>
  );
}
