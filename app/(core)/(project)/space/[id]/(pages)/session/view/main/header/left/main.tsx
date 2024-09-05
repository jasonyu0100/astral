import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForSessionUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { useContext } from 'react';

export function SpaceSessionHeaderLeft() {
  const updateListController = useContext(
    ContextForSessionUpdateListFromChapter,
  );
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
