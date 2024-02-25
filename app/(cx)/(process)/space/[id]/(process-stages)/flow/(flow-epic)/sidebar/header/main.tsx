import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { borderStyles } from '@/(design)/(styles)/data';

export function FlowSidebarHeader() {
  return (
    <GlassContainer
      displayName={FlowSidebarHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      className='flex flex-row items-center'
      borderStyle={borderStyles['border-b']}
    >
      <p className='font-extraBold  text-xl text-slate-400'>Moments</p>
    </GlassContainer>
  );
}
