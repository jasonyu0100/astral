import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapSidebarListMode,
} from '../../../../../controller/map/main';

export function SpaceMapSidebarScenesList() {
  const mapController = useContext(ContextForSpaceMap);
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <>
      {sceneListController.state.objs.map((scene, index) => (
        <GlassWindowFrame
          className='p-[1rem]'
          roundedFx={roundedFx.rounded}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents
            className='flex flex-row items-center space-x-[1rem]'
            onClick={() => {
              mapController.updateListSceneMode(
                SpaceMapSidebarListMode.DEFAULT,
              );
              sceneListController.actions.stateActions.select(scene);
            }}
          >
            <div className='flex h-[1.5rem] w-[1.5rem] flex-shrink-0 items-center justify-center rounded-full bg-purple-500'>
              <p className='text-center font-bold text-white'>{index + 1}</p>
            </div>
            <div
              key={scene.id}
              className='flex flex-col font-bold text-slate-300'
            >
              <div className='text-lg font-bold'>
                {scene.title || 'Untitled'}
              </div>
              <div className='text-sm font-light'>
                {scene.description || 'No description'}
              </div>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      ))}
    </>
  );
}
