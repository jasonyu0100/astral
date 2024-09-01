import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';

export function SpaceJourneySidebarScenesListItemInactive() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const scene = useContext(ContextForChapterSceneObj);

  return (
    <GlassWindowFrame>
      <GlassWindowContents
        className='flex flex-row items-center space-x-[1rem]'
        onClick={() => {
          sceneListController.actions.stateActions.select(scene);
        }}
      >
        <div
          key={scene.id}
          className='flex flex-col space-y-2 font-bold text-slate-300'
        >
          <div className='text-lg font-bold'>{scene.title || 'Untitled'}</div>
          <div className='text-sm font-light'>
            {scene.objective || 'No description'}
          </div>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
