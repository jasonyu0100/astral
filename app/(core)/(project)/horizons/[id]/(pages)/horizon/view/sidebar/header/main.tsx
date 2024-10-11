import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';

export function HorizonsHorizonSidebarHeader() {
  return (
    <div className='grid h-[4rem] w-full flex-shrink-0 grid-cols-2 p-[1rem] py-[0.5rem] shadow-glow'>
      <div>
        <GlassWindowFrame
          className='h-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            // onClick={() => updateSidebarMode(SpacesJourneySidebarMode.LINKS)}
          >
            <p
              className={cn('font-bold text-slate-500', {
                // 'text-slate-300':
                //   sidebarMode === SpacesJourneySidebarMode.LINKS,
              })}
            >
              Upcoming
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </div>
      <div>
        <GlassWindowFrame
          className='h-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            // onClick={() => updateSidebarMode(SpacesJourneySidebarMode.NOTES)}
          >
            <p
              className={cn('font-bold text-slate-500', {
                // 'text-slate-300':
                //   sidebarMode === SpacesJourneySidebarMode.NOTES,
              })}
            >
              Past
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </div>
    </div>
  );
}
