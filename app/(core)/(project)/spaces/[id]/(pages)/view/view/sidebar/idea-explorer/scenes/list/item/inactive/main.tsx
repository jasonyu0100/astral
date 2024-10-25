import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/(server)/model/scene/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';

export function SpacesViewSidebarScenesListInactiveItem() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const scene = useContext(ContextForIdeaSceneObj);

  return (
    <>
      <GlassWindowFrame>
        <GlassWindowContents
          className='flex flex-row items-center space-x-[1rem]'
          onClick={() => {
            sceneListController.actions.stateActions.select(scene);
          }}
        >
          <div
            key={scene.id}
            className='flex flex-col font-bold text-slate-300'
          >
            <div className='text-lg font-bold'>
              {scene?.title?.trim() || 'Untitled'}
            </div>
            <div className='text-sm font-light'>
              {scene?.objective?.trim() || 'Untitled'}
            </div>
          </div>
        </GlassWindowContents>
      </GlassWindowFrame>
    </>
  );
}
