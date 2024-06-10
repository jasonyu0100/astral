import { useContext } from 'react';
import { MapSaveButton } from '../../../common/save/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';

export function InfoRight() {
  const ideasController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <MapSaveButton
        onClick={() => ideasController.actions.editActions.sync()}
      />
    </div>
  );
}
