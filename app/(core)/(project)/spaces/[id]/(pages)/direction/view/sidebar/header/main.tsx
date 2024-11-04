import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesDirection,
  SpacesDirectionSidebarMode,
} from '../../../controller/main';

export function SpacesDirectionSidebarHeader() {
  const {
    state: { sidebarMode },
    actions: { updateSidebarMode },
  } = useContext(ContextForSpacesDirection);

  return (
    <div className='grid h-[4rem] w-full flex-shrink-0 grid-cols-2 p-[1rem] py-[0.5rem] shadow-glow'>
      <div>
        <GlassWindowFrame
          className='h-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() =>
              updateSidebarMode(SpacesDirectionSidebarMode.CHAPTERS)
            }
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  sidebarMode === SpacesDirectionSidebarMode.CHAPTERS,
              })}
            >
              Chapters
            </p>
          </GlassWindowContents>
          {sidebarMode === SpacesDirectionSidebarMode.CHAPTERS && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      </div>
      <div>
        <GlassWindowFrame
          className='h-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() =>
              updateSidebarMode(SpacesDirectionSidebarMode.BACKLOG)
            }
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  sidebarMode === SpacesDirectionSidebarMode.BACKLOG,
              })}
            >
              Backlog
            </p>
          </GlassWindowContents>
          {sidebarMode === SpacesDirectionSidebarMode.BACKLOG && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      </div>
    </div>
  );
}
