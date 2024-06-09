import { useContext } from 'react';
import { MapSaveButton } from '../../../common/save/main';
import { ContextForSceneIdeaList } from '@/(model)/(controller)/space/chapter/scene/idea/list';

export function VisualRight() {
  const ideasHandler = useContext(ContextForSceneIdeaList)

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <MapSaveButton onClick={() => ideasHandler.actions.editActions.sync()} />
    </div>
  );
}
