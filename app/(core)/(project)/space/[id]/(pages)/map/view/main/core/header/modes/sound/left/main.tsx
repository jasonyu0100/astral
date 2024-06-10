import {
  StarModalContext,
} from '@/(core)/(project)/space/[id]/(pages)/map/(modal)/idea/main';
import { useContext } from 'react';
import { ToggleMapModalButton } from '../../../common/toggle/main';

export function SoundLeft() {
  const modalContext = useContext(StarModalContext);

  return (
    <div className='flex w-1/3 flex-row'>
      <ToggleMapModalButton/>
    </div>
  );
}
