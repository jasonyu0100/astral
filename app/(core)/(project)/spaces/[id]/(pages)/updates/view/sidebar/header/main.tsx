import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesPosts,
  SpacesPostsSidebarMode,
} from '../../../controller/main';

export function SpacesPostsSidebarHeader() {
  const {
    state: { sidebarMode },
    actions: { updateSidebarMode },
  } = useContext(ContextForSpacesPosts);

  return (
    <div className='grid h-[4rem] w-full flex-shrink-0 grid-cols-2 p-[1rem] py-[0.5rem] shadow-glow'>
      <div>
        <GlassWindowFrame
          className='h-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() => updateSidebarMode(SpacesPostsSidebarMode.CHAPTERS)}
          >
            <p
              className={ctwn('font-bold text-slate-400', {
                'text-slate-300':
                  sidebarMode === SpacesPostsSidebarMode.CHAPTERS,
              })}
            >
              Chapters
            </p>
          </GlassWindowContents>
          {sidebarMode === SpacesPostsSidebarMode.CHAPTERS && (
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
              updateSidebarMode(SpacesPostsSidebarMode.Attachments)
            }
          >
            <p
              className={ctwn('font-bold text-slate-400', {
                'text-slate-300':
                  sidebarMode === SpacesPostsSidebarMode.Attachments,
              })}
            >
              Attachments
            </p>
          </GlassWindowContents>
          {sidebarMode === SpacesPostsSidebarMode.Attachments && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      </div>
    </div>
  );
}
