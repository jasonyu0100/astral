import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, borderStyles } from '@/(design)/(styles)/data';

export function JournalNetworkSidebarSection() {
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <div className='space-y-[1rem]'>
        <GlassContainer
          sizeStyle='h-[50px] w-full'
          className='rounded-[1rem]'
          borderStyle={borderStyles['border-all']}
          glassStyle={backgroundStyles['glass-5']}
        ></GlassContainer>
        <GlassContainer
          sizeStyle='h-[50px] w-full'
          className='rounded-[1rem]'
          borderStyle={borderStyles['border-all']}
          glassStyle={backgroundStyles['glass-5']}
        ></GlassContainer>
        <GlassContainer
          sizeStyle='h-[50px] w-full'
          className='rounded-[1rem]'
          borderStyle={borderStyles['border-all']}
          glassStyle={backgroundStyles['glass-5']}
        ></GlassContainer>
        <GlassContainer
          sizeStyle='h-[50px] w-full'
          className='rounded-[1rem]'
          borderStyle={borderStyles['border-all']}
          glassStyle={backgroundStyles['glass-5']}
        ></GlassContainer>
      </div>
    </div>
  );
}
