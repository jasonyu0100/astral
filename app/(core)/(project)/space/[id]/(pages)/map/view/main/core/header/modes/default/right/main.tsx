import { useContext } from 'react';
import { MapSaveButton } from '../../../common/save/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';

export function DefaultRight() {
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <MapSaveButton onClick={() => sceneIdeaListController.actions.editActions.sync()} />
    </div>
  );
}
