import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useContext } from 'react';

export function SpaceProgressHeaderLeft() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row'>
      <p className='text-slate-300'>
        {sceneListController.state.currentObj?.title || 'Untitled'} {'- '}
        {ideaListController.state.objs.length} ideas
      </p>
    </div>
  );
}
