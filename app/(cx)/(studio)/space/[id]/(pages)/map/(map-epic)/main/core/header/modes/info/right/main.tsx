import { useContext } from 'react';
import { MapSaveButton } from '../../../common/save/main';
import { StarsHandlerContext } from '@/(lgx)/internal/handler/stars/main';

export function InfoRight() {
  const starsHandler = useContext(StarsHandlerContext);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <MapSaveButton
        onClick={() => starsHandler.starActions.updateStars()}
      />
    </div>
  );
}
