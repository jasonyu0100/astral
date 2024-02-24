import { useContext } from 'react';
import { DraftContext } from '../../../../../../page';
import { DraftHeaderSaveButton } from '../../common/save/main';

export function DraftHeaderStarRight() {
  const { starHandler, updateModalType } = useContext(DraftContext);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <DraftHeaderSaveButton onClick={() => starHandler.queryUpdateStars()} />
    </div>
  );
}
