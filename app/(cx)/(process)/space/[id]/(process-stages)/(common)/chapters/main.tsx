import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles } from '@/(design)/(styles)/data';

export function ChaptersContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ChaptersContainer.name}
      size='w-full h-[80px]'
      glass={glassStyles['glass-5']}
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
    >
      {children}
    </GlassAreaContainer>
  );
}
