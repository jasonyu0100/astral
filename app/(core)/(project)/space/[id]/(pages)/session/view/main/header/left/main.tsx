import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';

export function SpaceSessionHeaderLeft() {
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <div className='flex w-1/3 flex-row'>
      <p className='text-md font-light text-slate-300'>
        {updateListController.state.objs.length} updates /{' '}
        {sceneListController.state.objs.length} scenes
      </p>
    </div>
  );
}
