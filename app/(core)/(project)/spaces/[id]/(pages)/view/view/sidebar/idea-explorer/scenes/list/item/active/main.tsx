import {
  ContextForSpacesMap,
  SpacesMapDirectoryMode,
  SpacesMapSidebarMode,
} from '@/(core)/(project)/spaces/[id]/(pages)/view/controller/main';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/(server)/model/scene/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesMapSidebarScenesListActiveItem() {
  const {
    actions: { updateSidebarMode: updateSidebarMode, updateDirectoryMode },
  } = useContext(ContextForSpacesMap);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const scene = useContext(ContextForIdeaSceneObj);

  return (
    <GlassWindowFrame className='w-full p-[1rem]' roundedFx={roundedFx.rounded}>
      <GlassWindowContents
        className='flex flex-col space-y-[0.5rem] font-bold text-slate-300'
        onClick={() => {
          sceneListController.actions.stateActions.select(scene);
        }}
      >
        <div className='text-lg font-bold'>
          {scene.title?.trim() || 'Untitled'}
        </div>
        <div className='text-sm font-light'>
          {scene.objective || 'No description'}
        </div>
        <div
          className='w-full cursor-pointer rounded-[2rem] bg-blue-500 p-[1rem] text-center font-bold text-white'
          onClick={() => {
            updateSidebarMode(SpacesMapSidebarMode.IDEAS);
            updateDirectoryMode(SpacesMapDirectoryMode.DEFAULT);
          }}
        >
          View Ideas
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
