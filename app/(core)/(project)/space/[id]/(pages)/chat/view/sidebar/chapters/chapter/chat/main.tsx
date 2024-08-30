import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import SpaceChatHeaderIndicator from '../header/indicator/main';

export function SpaceChatChapterScene() {
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
            <div className='flex flex-row space-x-[1rem]'>
              <div className='flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-blue-500'>
                <p className='text-lg font-bold text-slate-500'>{index + 1}</p>
              </div>
            </div>
            <p className='text-lg font-bold text-slate-500'>{scene.title}</p>
            <SpaceChatHeaderIndicator />
          </div>
        ) : (
          <div className='flex flex-row space-x-[1rem]'>
            <div className='flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-blue-500'>
              <p className='text-lg font-bold text-slate-500'>{index + 1}</p>
            </div>
            <p className='text-lg font-bold text-slate-500'>{scene.title}</p>
          </div>
        )}
      </div>
    </button>
  );
}
