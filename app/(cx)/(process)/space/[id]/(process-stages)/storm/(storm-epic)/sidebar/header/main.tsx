import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { borderStyles } from '@/(design)/(styles)/data';

export function StormSidebarHeader() {
  return (
    <GlassContainer
      displayName={StormSidebarHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      className='flex flex-row items-center'
      borderStyle={borderStyles['border-b']}
    >
      <p className='font-extraBold  text-xl text-slate-400'>Chapters</p>
    </GlassContainer>
  );
}
