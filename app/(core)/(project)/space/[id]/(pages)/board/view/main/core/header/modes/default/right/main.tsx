import { useContext } from 'react';
import { BoardSaveButton } from '../../../common/save/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';

export function DefaultRight() {
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <BoardSaveButton onClick={() => sceneIdeaListController.actions.editActions.sync()} />
    </div>
  );
}
