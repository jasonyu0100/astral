import { useContext } from 'react';
import { MapSaveButton } from '../../../common/save/main';
import { IdeasHandlerContext } from '@/(controller)/(archive)/ideas/main';

export function InfoRight() {
  const ideasHandler = useContext(IdeasHandlerContext);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <MapSaveButton
        onClick={() => ideasHandler.ideaActions.updateIdeas()}
      />
    </div>
  );
}
