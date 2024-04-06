import { useContext } from 'react';
import { MapSaveButton } from '../../../common/save/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/stars/main';

export function SoundRight() {
  const starsHandler = useContext(StarsHandlerContext)

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <MapSaveButton onClick={() => starsHandler.starActions.updateStars()} />
    </div>
  );
}
