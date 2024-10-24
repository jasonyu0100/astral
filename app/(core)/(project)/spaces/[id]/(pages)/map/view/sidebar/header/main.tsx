import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapSidebarContentMode,
} from '../../../controller/main';

export function SpacesMapSidebarHeader() {
  const spacesMapController = useContext(ContextForSpacesMap);

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
                SpacesMapSidebarContentMode.CHAPTERS,
              )
            }
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  spacesMapController.state.sidebarContentMode ===
                  SpacesMapSidebarContentMode.CHAPTERS,
              })}
            >
              Chapters
            </p>
          </GlassWindowContents>
          {spacesMapController.state.sidebarContentMode ===
            SpacesMapSidebarContentMode.CHAPTERS && (
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
                SpacesMapSidebarContentMode.EXPLORER,
              )
            }
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  spacesMapController.state.sidebarContentMode ===
                  SpacesMapSidebarContentMode.EXPLORER,
              })}
            >
              Explorer
            </p>
          </GlassWindowContents>
          {spacesMapController.state.sidebarContentMode ===
            SpacesMapSidebarContentMode.EXPLORER && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      </div>
    </div>
  );
}
