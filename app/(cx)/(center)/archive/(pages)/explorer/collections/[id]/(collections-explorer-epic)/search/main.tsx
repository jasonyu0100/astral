import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { glassFx, borderFx, roundedFx } from '@/(fx)/data';

export function CollectionsSearch() {
  return (
    <GlassWindowFrame
      name={CollectionsSearch.name}
      className='h-[4rem] w-full flex-shrink-0'
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents
        className={`flex flex-row items-center space-x-[1rem] px-[1rem]`}
      >
        <input
          className='h-full w-full animate-pulse-slow rounded-full bg-transparent px-[2rem] text-2xl font-bold text-slate-300 outline-none'
          placeholder='Search within...'
        ></input>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}

