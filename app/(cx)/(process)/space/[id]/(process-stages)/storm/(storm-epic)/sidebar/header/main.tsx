import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx } from '@/(design)/(fx)/data';

export function StormSidebarHeader() {
  return (
    <GlassAreaContainer
      name={StormSidebarHeader.name}
      sizeFx='h-[60px] w-full flex-shrink-0'
      className='flex flex-row items-center'
      borderFx={borderFx['border-b']}
    >
      <p className='font-extraBold  text-xl text-slate-400'>Chapters</p>
    </GlassAreaContainer>
  );
}
