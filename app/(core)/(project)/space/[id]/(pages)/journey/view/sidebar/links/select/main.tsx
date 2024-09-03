import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpaceJourney,
  SpaceJourneySidebarMode,
} from '../../../../controller/main';

export function SpaceJourneySidebarIdeasSelect() {
  const {
    state: { sidebarMode },
    actions: { updateSidebarMode },
  } = useContext(ContextForSpaceJourney);

  return (
    <div className='flex h-[4rem] w-full flex-row items-center justify-between p-[1rem] shadow-glow'>
      <GlassWindowFrame
        className='h-[2rem] w-[100px] flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className='flex cursor-pointer items-center justify-center'
          onClick={() => updateSidebarMode(SpaceJourneySidebarMode.IDEAS)}
        >
          <p
            className={cn('font-bold text-slate-500', {
              'text-slate-300': sidebarMode === SpaceJourneySidebarMode.IDEAS,
            })}
          >
            Ideas
          </p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <div className='flex flex-col items-center justify-center p-[1rem]'>
        <p className='text-xl font-bold text-slate-500'>/</p>
      </div>
      <GlassWindowFrame
        className='h-[2rem] w-[100px] flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className='flex cursor-pointer items-center justify-center'
          onClick={() => updateSidebarMode(SpaceJourneySidebarMode.NOTES)}
        >
          <p
            className={cn('font-bold text-slate-500', {
              'text-slate-300': sidebarMode === SpaceJourneySidebarMode.NOTES,
            })}
          >
            Notes
          </p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
