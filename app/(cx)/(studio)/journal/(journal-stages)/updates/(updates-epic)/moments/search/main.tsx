import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  borderFx,
  roundedFx,
} from '@/(design)/(fx)/data';

export function JournalSearch() {
  return (
    <GlassAreaContainer
      name={JournalSearch.name}
      sizeFx='w-full h-[120px]'
      className='flex flex-shrink-0 flex-row items-center p-[2rem]'
    >
      <GlassAreaContainer
        sizeFx='flex-grow h-[4rem]'
        className={`flex flex-row items-center space-x-[1rem] px-[1rem]`}
        glassFx={glassFx['glass-10']}
        borderFx={borderFx['border-all']}
        roundedFx={roundedFx['rounded-full']}
      >
        <input
          className='h-full w-full rounded-full bg-transparent px-[2rem] text-2xl font-bold text-slate-300 outline-none animate-pulse-slow'
          placeholder='Seek verses...'
        ></input>
      </GlassAreaContainer>
      {/* <p className='font-bold text-slate-300'>Search People</p> */}
    </GlassAreaContainer>
  );
}
