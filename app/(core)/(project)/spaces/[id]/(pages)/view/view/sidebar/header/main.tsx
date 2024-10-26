import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesView,
  SpacesViewSidebarContentMode,
} from '../../../controller/main';

export function SpacesViewSidebarHeader() {
  const spacesMapController = useContext(ContextForSpacesView);

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
              spacesMapController.actions.updateSidebarContentMode(
                SpacesViewSidebarContentMode.CHAPTERS,
              )
            }
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  spacesMapController.state.sidebarContentMode ===
                  SpacesViewSidebarContentMode.CHAPTERS,
              })}
            >
              Chapters
            </p>
          </GlassWindowContents>
          {spacesMapController.state.sidebarContentMode ===
            SpacesViewSidebarContentMode.CHAPTERS && (
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
              spacesMapController.actions.updateSidebarContentMode(
                SpacesViewSidebarContentMode.EXPLORER,
              )
            }
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  spacesMapController.state.sidebarContentMode ===
                  SpacesViewSidebarContentMode.EXPLORER,
              })}
            >
              Explorer
            </p>
          </GlassWindowContents>
          {spacesMapController.state.sidebarContentMode ===
            SpacesViewSidebarContentMode.EXPLORER && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      </div>
    </div>
  );
}
