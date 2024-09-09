import {
  ContextForSpaceMap,
  SpaceMapDirectoryMode,
  SpaceMapSidebarMode,
} from '@/(core)/(project)/space/[id]/(pages)/map/controller/map/main';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpaceMapSidebarScenesListActiveItem() {
  const {
    actions: { updateSidebarMode: updateSidebarMode, updateDirectoryMode },
  } = useContext(ContextForSpaceMap);
  const sceneListController = useContext(ContextForChapterSceneList);
  const scene = useContext(ContextForChapterSceneObj);

  return (
    <GlassWindowFrame className='w-full p-[1rem]' roundedFx={roundedFx.rounded}>
      <GlassWindowContents
        className='flex flex-col space-y-[0.5rem] font-bold text-slate-300'
        onClick={() => {
          sceneListController.actions.stateActions.select(scene);
        }}
      >
        <div className='text-lg font-bold'>{scene.title || 'Untitled'}</div>
        <div className='text-sm font-light'>
          {scene.objective || 'No description'}
        </div>
        <div
          className='w-full cursor-pointer rounded-[1rem] bg-blue-500 p-[1rem] text-center font-bold text-white'
          onClick={() => {
            updateSidebarMode(SpaceMapSidebarMode.IDEAS);
            updateDirectoryMode(SpaceMapDirectoryMode.DEFAULT);
          }}
        >
          View Ideas
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
