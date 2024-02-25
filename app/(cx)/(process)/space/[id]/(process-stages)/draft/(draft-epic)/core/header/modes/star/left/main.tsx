import { useContext } from 'react';
import { DraftHeaderStarBackButton } from './back/main';
import { DraftContext, DraftModalType } from '../../../../../../page';

export function DraftHeaderStarLeft() {
  const draftContext = useContext(DraftContext);

  return (
    <div className='flex w-1/3 flex-row'>
      <DraftHeaderStarBackButton
        onClick={() =>
          draftContext.updateModalType(DraftModalType.DEFAULT)
        }
      />
    </div>
  );
}
