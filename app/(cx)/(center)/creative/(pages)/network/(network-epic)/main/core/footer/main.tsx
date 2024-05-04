import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { borderFx, glassFx } from '@/(fx)/data';

export function CreativeFooter() {
  return (
    <GlassAreaContainer
      name={CreativeFooter.name}
      sizeFx='w-full h-[4rem]'
      className='flex flex-shrink-0 flex-row items-center justify-center'
      glassFx={glassFx['glass-5']}
    >
      <p className='font-bold text-slate-300'>200 results</p>
    </GlassAreaContainer>
  );
}
