import {
  StarModalContext,
} from '@/(modals)/star-modal/main';
import { useContext } from 'react';
import { ToggleDraftModalButton } from '../../../common/toggle/main';

export function SoundLeft() {
  const modalContext = useContext(StarModalContext);

  return (
    <div className='flex w-1/3 flex-row'>
      <ToggleDraftModalButton/>
    </div>
  );
}
