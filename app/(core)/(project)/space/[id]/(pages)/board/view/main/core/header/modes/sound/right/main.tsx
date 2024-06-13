import { useContext } from 'react';
import { BoardSaveButton } from '../../../common/save/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';

export function SoundRight() {
  const ideaListController = useContext(ContextForSceneIdeaList)

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <BoardSaveButton onClick={() => ideaListController.actions.editActions.sync()} />
    </div>
  );
}
