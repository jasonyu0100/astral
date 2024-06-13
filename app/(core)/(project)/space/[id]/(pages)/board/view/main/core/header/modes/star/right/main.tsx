import { useContext } from 'react';
import { BoardSaveButton } from '../../../common/save/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';

export function BoardHeaderIdeaRight() {
  const ideasListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <BoardSaveButton onClick={() => ideasListController.actions.editActions.sync()} />
    </div>
  );
}
