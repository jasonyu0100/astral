import { useContext } from 'react';
import { MapSaveButton } from '../../../common/save/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';

export function MapHeaderIdeaRight() {
  const ideasListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <MapSaveButton onClick={() => ideasListController.actions.editActions.sync()} />
    </div>
  );
}
