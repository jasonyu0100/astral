import { useContext } from 'react';
import { DraftContext } from '../../../../page';
import { DraftHeaderSaveButton } from './save/main';
import { DraftHeaderDJButton } from './dj/main';

export function DraftHeaderRight() {
  const { starHandler, toggleDjMode } = useContext(DraftContext);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <DraftHeaderDJButton onClick={() => toggleDjMode()} />
      <DraftHeaderSaveButton onClick={() => starHandler.queryUpdateStars()} />
    </div>
  );
}
