import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles } from '@/(design)/(styles)/data';

export function ChaptersContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={ChaptersContainer.name}
      sizeStyle='w-full h-[80px]'
      glassStyle={backgroundStyles['glass-5']}
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
    >
      {children}
    </GlassContainer>
  );
}
