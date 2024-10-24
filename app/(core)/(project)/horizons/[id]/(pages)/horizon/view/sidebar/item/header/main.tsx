import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';

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
  const hoverableController = useControllerForHoverable();

  return (
    <div
      className='w-full'
      onMouseEnter={() => hoverableController.onHover()}
      onMouseLeave={() => hoverableController.onUnhover()}
    >
      <GlassWindowFrame
        className='w-full p-[1rem]'
        roundedFx={roundedFx['rounded-t']}
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents className='flex flex-col space-y-[0.5rem]'>
          <div className='flex w-full space-x-[1rem]'>
            <span className='text-2xl'>{karma}</span>
            <p className='text-md ml-auto mt-[3px] flex-grow text-right font-light text-slate-300'>
              {title}
            </p>
          </div>
          <p className='ml-auto text-sm font-light text-slate-500'>{time}</p>
        </GlassWindowContents>
        {hoverableController.hovered && (
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
