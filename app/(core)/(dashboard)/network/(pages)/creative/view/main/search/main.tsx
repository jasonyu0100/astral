import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function CreativeNetworkSearch() {
  return (
    <div className='w-full p-[2rem] shadow-glow'>
      <GlassWindowFrame
        name={CreativeNetworkSearch.name}
        className='h-[4rem] w-full'
        borderFx={borderFx['border-around']}
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className={`flex flex-row items-center space-x-[1rem] px-[1rem]`}
        >
          <input
            className='h-full w-full animate-pulse-slow rounded-full bg-transparent px-[2rem] text-2xl font-bold text-slate-300 outline-none'
            placeholder='Discover creatives...'
          ></input>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
