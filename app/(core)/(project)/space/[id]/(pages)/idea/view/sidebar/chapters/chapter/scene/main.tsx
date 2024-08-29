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
    <div
      className='flex w-full flex-row'
      onClick={() => sceneListController.actions.stateActions.select(scene)}
    >
      {active ? (
        <div className='flex w-full animate-pulse-slow flex-row items-center justify-between'>
          <div className='flex w-full flex-col'>
            <p className='w-full text-lg font-bold text-slate-400'>
              {index + 1}. {scene.title}
            </p>
          </div>
          <SpaceIdeaHeaderIndicator />
        </div>
      ) : (
        <div className='flex w-full flex-row items-center space-x-[1rem]'>
          <p className='text-lg font-bold text-slate-400'>
            {index + 1}. {scene.title}
          </p>
        </div>
      )}
    </div>
  );
}
