import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesBoard,
  SpacesBoardSidebarMode,
} from '../../../controller/main';

export function SpacesBoardSidebarHeader() {
  const {
    state: { sidebarMode },
    actions: { updateSidebarMode },
  } = useContext(ContextForSpacesBoard);

  return (
    <div className='grid h-[4rem] w-full flex-shrink-0 grid-cols-2 p-[1rem] py-[0.5rem] shadow-glow'>
      <div>
        <GlassWindowFrame
          className='h-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() => updateSidebarMode(SpacesBoardSidebarMode.LINKS)}
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300': sidebarMode === SpacesBoardSidebarMode.LINKS,
              })}
            >
              Links
            </p>
          </GlassWindowContents>
          {sidebarMode === SpacesBoardSidebarMode.LINKS && (
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
            onClick={() => updateSidebarMode(SpacesBoardSidebarMode.NOTES)}
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300': sidebarMode === SpacesBoardSidebarMode.NOTES,
              })}
            >
              Notes
            </p>
          </GlassWindowContents>
          {sidebarMode === SpacesBoardSidebarMode.NOTES && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      </div>
    </div>
  );
}
