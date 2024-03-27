import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles } from '@/(design)/(styles)/data';

export function ChaptersContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={ChaptersContainer.name}
      sizeStyle='w-full h-[80px]'
      glassStyle={glassStyles['glass-5']}
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
    >
      {children}
    </GlassAreaContainer>
  );
}
