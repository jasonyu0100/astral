import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export enum KarmaState {
  Full = '🌕',
  Waxing = '🌖',
  Half = '🌗',
  Waning = '🌘',
  New = '🌑',
}

export function HorizonHorizonSidebarItemHeader({
  title,
  karma,
  time,
}: {
  title: string;
  karma: KarmaState;
  time: string;
}) {
  return (
    <GlassWindowFrame className='w-full p-[1rem]' roundedFx={roundedFx.rounded}>
      <GlassWindowContents className='flex flex-col space-y-[0.5rem]'>
        <div className='flex w-full space-x-[1rem]'>
          <span className='text-2xl'>{karma}</span>
          <p className='text-md ml-auto mt-[3px] flex-grow text-right font-light text-slate-300'>
            {title}
          </p>
        </div>
        <p className='ml-auto text-sm font-light text-slate-500'>{time}</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
