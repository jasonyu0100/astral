import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(design)/(fx)/data';

export function JournalFooter() {
  return (
    <GlassAreaContainer
      name={JournalFooter.name}
      sizeFx='w-full h-[60px]'
      className='flex flex-shrink-0 flex-row items-center justify-center'
      glassFx={glassFx['glass-5']}
    >
      <p className='font-bold text-slate-300'>200 results</p>
    </GlassAreaContainer>
  );
}
