import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';

export function HorizonsArcRowElement() {
  return (
    <GlassWindowFrame
      className={ctwn('z-10 h-[3.5rem] flex-shrink-0', {})}
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents
        className='z-10 flex h-full w-full items-center px-[1rem]'
        onClick={() => {}}
      >
        <p className='whitespace-nowrap text-center text-sm font-bold text-slate-300'>
          Arc Chapter
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
      {/* {!active ? (
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            ) : (
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            )} */}
    </GlassWindowFrame>
  );
}
