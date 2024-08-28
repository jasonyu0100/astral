import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import SpaceIdeaHeaderIndicator from '../header/indicator/main';

export function SpaceIdeaChapterScene() {
  const scene = useContext(ContextForChapterSceneObj);
  const index = useContext(ContextForIndexable);
  const sceneListController = useContext(ContextForChapterSceneList);
  const active = sceneListController.actions.stateActions.checkActive(scene);

  return (
    <button
      onClick={() => sceneListController.actions.stateActions.select(scene)}
    >
      <div className='flex w-full flex-row items-center'>
        {active ? (
          <div className='flex w-full animate-pulse-slow flex-row items-center justify-between'>
            <p className='text-lg font-bold text-slate-500'>
              {index + 1}. {scene.title}
            </p>
            <SpaceIdeaHeaderIndicator />
          </div>
        ) : (
          <p className='text-lg font-bold text-slate-500'>
            {index + 1}. {scene.title}
          </p>
        )}
      </div>
    </button>
  );
}
