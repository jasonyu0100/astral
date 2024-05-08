import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx } from '@/(style)/data';

export function CreativeNetworkSidebarHeader() {
  return (
    <GlassAreaContainer
      name={CreativeNetworkSidebarHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className='flex flex-row items-center'
      borderFx={borderFx['border-b']}
    >
      <p className='font-extraBold  text-xl text-slate-400'>Horizons</p>
    </GlassAreaContainer>
  );
}
