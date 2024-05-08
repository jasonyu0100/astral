import {
  StarModalContext,
} from '@/(core)/(studio)/(modals)/star-modal/main';
import { useContext } from 'react';
import { ToggleMapModalButton } from '../../../common/toggle/main';

export function InfoLeft() {
  const modalContext = useContext(StarModalContext);

  return (
    <div className='flex w-1/3 flex-row'>
      <ToggleMapModalButton/>
    </div>
  );
}
