import { useContext } from 'react';
import { MapSaveButton } from '../../../common/save/main';
import { IdeasHandlerContext } from '@/(model)/(controller)/(archive)/ideas/main';

export function VisualRight() {
  const ideasHandler = useContext(IdeasHandlerContext)

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <MapSaveButton onClick={() => ideasHandler.ideaActions.updateIdeas()} />
    </div>
  );
}
