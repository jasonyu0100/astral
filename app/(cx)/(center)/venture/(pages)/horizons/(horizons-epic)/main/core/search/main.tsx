import { GlassWindowContents } from "@/(pkgs)/(glass)/window/contents/main";
import { GlassWindowFrame } from "@/(pkgs)/(glass)/window/main";
import { GlassWindowPane } from "@/(pkgs)/(glass)/window/pane/main";
import { borderFx, roundedFx, glassFx } from "@/(fx)/data";

export function HorizonsSearch() {
  return (
    <div className='w-full p-[2rem]'>
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
    </div>
  );
}
