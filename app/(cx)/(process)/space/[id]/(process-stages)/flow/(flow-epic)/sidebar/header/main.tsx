import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { borderStyles } from '@/(design)/(styles)/data';

export function FlowSidebarHeader() {
  return (
    <GlassAreaContainer
      name={FlowSidebarHeader.name}
      size='h-[60px] w-full flex-shrink-0'
      className='flex flex-row items-center'
      border={borderStyles['border-b']}
    >
      <p className='font-extraBold  text-xl text-slate-400'>Moments</p>
    </GlassAreaContainer>
  );
}
