import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapDirectoryMode,
  SpaceMapStatusMode,
} from '../../../../controller/map/main';
import { SpaceMapNavigation } from './navigation/main';
import { SpaceMapPalette } from './palette/main';
import { SpaceMapScene } from './scene/main';
import { SpaceMapStatus } from './status/main';

export function SpaceMapContents() {
  const {
    state: { statusMode: statusMode, directoryMode: directoryMode },
    actions: { updateDirectoryMode },
  } = useContext(ContextForSpaceMap);
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col items-center'
    >
      {directoryMode === SpaceMapDirectoryMode.DIRECTORY ? (
        <>
          <div className='relative grid h-full w-full grid-cols-4 gap-[2rem] p-[2rem]'>
            {sceneListController.state.objs.map((scene, index) => (
              <GlassWindowFrame
                className='aspect-square p-[1rem]'
                borderFx={borderFx['border-around']}
                roundedFx={roundedFx.rounded}
              >
                <GlassWindowContents
                  key={scene.id}
                  className='cursor-pointer font-bold text-slate-300'
                  onClick={() => {
                    sceneListController.actions.stateActions.select(scene);
                    updateDirectoryMode(SpaceMapDirectoryMode.DEFAULT);
                  }}
                >
                  <div className='text-lg font-bold'>
                    {scene.title || 'Untitled'}
                  </div>
                  <div className='text-sm font-light'>
                    {scene.objective || 'No description'}
                  </div>
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-10']} />
              </GlassWindowFrame>
            ))}
          </div>
        </>
      ) : (
        <>
          {statusMode === SpaceMapStatusMode.ON && <SpaceMapStatus />}
          <div className='absolute left-[1rem] top-[1rem] z-50 flex h-[4rem] w-[4rem] flex-col items-center justify-center'>
            <AstralBackIndicatorIcon
              className='h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-500'
              onClick={() =>
                updateDirectoryMode(SpaceMapDirectoryMode.DIRECTORY)
              }
            />
          </div>
          <SpaceMapScene />
          <SpaceMapPalette />
          <SpaceMapNavigation />
        </>
      )}
    </div>
  );
}
