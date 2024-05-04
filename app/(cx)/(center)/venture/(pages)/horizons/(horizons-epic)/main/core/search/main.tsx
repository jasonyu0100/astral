import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { borderFx, roundedFx, glassFx } from '@/(fx)/data';

export function HorizonsSearch() {
  return (
    <GlassWindowFrame
      className='w-full px-[2rem] pb-[2rem] pt-[2rem]'
    >
      <GlassWindowFrame
        name={HorizonsSearch.name}
        className='h-[4rem] w-full'
        borderFx={borderFx['border-all']}
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className={`flex flex-row items-center space-x-[1rem] px-[1rem]`}
        >
          <input
            className='h-full w-full animate-pulse-slow rounded-full bg-transparent px-[2rem] text-2xl font-bold text-slate-300 outline-none'
            placeholder='Seek horizons...'
          ></input>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </GlassWindowFrame>
  );
}
