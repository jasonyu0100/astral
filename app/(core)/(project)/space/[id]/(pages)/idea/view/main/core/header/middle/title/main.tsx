import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useContext } from 'react';

export default function SpaceIdeaHeaderMiddleTitle() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <p className='text-lg font-light text-slate-300'>
      {sceneListController.state.currentObj?.title || 'untitled'}
    </p>
  );
}
