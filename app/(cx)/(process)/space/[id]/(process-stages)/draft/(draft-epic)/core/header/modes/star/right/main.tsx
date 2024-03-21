import { useContext } from 'react';
import { DraftSaveButton } from '../../../common/save/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/draft/stars/main';

export function DraftHeaderStarRight() {
  const starsHandler = useContext(StarsHandlerContext);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <DraftSaveButton onClick={() => starsHandler.starActions.updateStars()} />
    </div>
  );
}
