import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';

export function HorizonsArcRowElement() {
  return (
    <GlassWindowFrame
      className={cn('z-10 h-[3.5rem] max-w-[300px]', {})}
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents
        className='z-10 flex h-full w-full items-center px-[1rem]'
        onClick={() => {}}
      >
        <p className='whitespace-nowrap text-sm font-bold text-slate-300'>
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
