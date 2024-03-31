import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, borderFx, roundedFx } from '@/(design)/(fx)/data';

export function ResourcesSearch() {
  return (
    <GlassWindowFrame
      name={ResourcesSearch.name}
      className='h-[4rem] w-full'
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents
        className={`flex flex-row items-center space-x-[1rem] px-[1rem]`}
      >
        <input
          className='h-full w-full animate-pulse-slow rounded-full bg-transparent px-[2rem] text-2xl font-bold text-slate-300 outline-none'
          placeholder='Gather inspiration...'
        ></input>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}


