import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { borderStyles } from '@/(design)/(styles)/data';

export function JournalUpdatesSidebarHeader() {
  return (
    <GlassAreaContainer
      name={JournalUpdatesSidebarHeader.name}
      size='h-[60px] w-full flex-shrink-0'
      className='flex flex-row items-center'
      border={borderStyles['border-b']}
    >
      <p className='font-extraBold  text-xl text-slate-400'>Network</p>
    </GlassAreaContainer>
  );
}
