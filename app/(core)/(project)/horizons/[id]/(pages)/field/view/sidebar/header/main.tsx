import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';

export function HorizonsFieldSidebarHeader() {
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
              className={ctwn('font-bold text-slate-400', {
                // 'text-slate-300':
                //   sidebarMode === SpacesJourneySidebarMode.LINKS,
              })}
            >
              Horizon
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
              className={ctwn('font-bold text-slate-400', {
                // 'text-slate-300':
                //   sidebarMode === SpacesJourneySidebarMode.NOTES,
              })}
            >
              Spaces
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </div>
    </div>
  );
}
