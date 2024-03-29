import {
  StarModalContext,
} from '@/(modals)/(process)/star-modal/main';
import { useContext } from 'react';
import { ToggleDraftModalButton } from '../../../common/toggle/main';

export function InfoLeft() {
  const modalContext = useContext(StarModalContext);

  return (
    <div className='flex w-1/3 flex-row'>
      <ToggleDraftModalButton/>
    </div>
  );
}
