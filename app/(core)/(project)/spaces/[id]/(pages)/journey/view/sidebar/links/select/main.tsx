import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesJourney,
  SpacesJourneySidebarMode,
} from '../../../../controller/main';

export function SpacesJourneySidebarIdeasSelect() {
  const {
    state: { sidebarMode },
    actions: { updateSidebarMode },
  } = useContext(ContextForSpacesJourney);

  return (
    <div className='flex h-[4rem] w-full flex-row items-center justify-between p-[1rem] shadow-glow'>
      <GlassWindowFrame
        className='h-[2rem] w-[120px] flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className='flex cursor-pointer items-center justify-center'
          onClick={() => updateSidebarMode(SpacesJourneySidebarMode.LINKS)}
        >
          <p
            className={cn('font-bold text-slate-500', {
              'text-slate-300': sidebarMode === SpacesJourneySidebarMode.LINKS,
            })}
          >
            Links
          </p>
        </GlassWindowContents>
        {sidebarMode === SpacesJourneySidebarMode.LINKS && (
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        )}
      </GlassWindowFrame>
      <div className='flex flex-shrink-0 flex-col items-center justify-center p-[1rem]'>
        <p className='text-xl font-bold text-slate-500'>/</p>
      </div>
      <GlassWindowFrame
        className='h-[2rem] w-[120px] flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className='flex cursor-pointer items-center justify-center'
          onClick={() => updateSidebarMode(SpacesJourneySidebarMode.NOTES)}
        >
          <p
            className={cn('font-bold text-slate-500', {
              'text-slate-300': sidebarMode === SpacesJourneySidebarMode.NOTES,
            })}
          >
            Notes
          </p>
        </GlassWindowContents>
        {sidebarMode === SpacesJourneySidebarMode.NOTES && (
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
