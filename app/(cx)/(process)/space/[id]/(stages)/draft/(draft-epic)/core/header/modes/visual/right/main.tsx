import { useContext } from 'react';
import { DraftContext } from '../../../../../../page';
import { DraftSaveButton } from '../../../common/save/main';

export function VisualRight() {
  const { starHandler } = useContext(DraftContext);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <DraftSaveButton onClick={() => starHandler.queryUpdateStars()} />
    </div>
  );
}
