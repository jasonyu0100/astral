import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpaceInbox,
  SpaceInboxSidebarMode,
} from '../../../controller/main';

export function SpaceInboxSidebarHeader() {
  const {
    state: { sidebarMode },
    actions: { updateSidebarMode },
  } = useContext(ContextForSpaceInbox);

  return (
    <div className='grid h-[4rem] w-full flex-shrink-0 grid-cols-2 p-[1rem] py-[0.5rem] shadow-glow'>
      <div>
        <GlassWindowFrame
          className='h-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() => updateSidebarMode(SpaceInboxSidebarMode.CHAPTERS)}
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  sidebarMode === SpaceInboxSidebarMode.CHAPTERS,
              })}
            >
              Chapters
            </p>
          </GlassWindowContents>
          {sidebarMode === SpaceInboxSidebarMode.CHAPTERS && (
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
            onClick={() => updateSidebarMode(SpaceInboxSidebarMode.Attachments)}
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  sidebarMode === SpaceInboxSidebarMode.Attachments,
              })}
            >
              Attachments
            </p>
          </GlassWindowContents>
          {sidebarMode === SpaceInboxSidebarMode.Attachments && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      </div>
    </div>
  );
}
