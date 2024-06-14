import { StarModalContext } from '@/(core)/(project)/space/[id]/(pages)/board/(modal)/idea/main';
import { useContext } from 'react';
import { ToggleBoardModalButton } from '../../../common/toggle/main';

export function VisualLeft() {
  const modalContext = useContext(StarModalContext);

  return (
    <div className='flex w-1/3 flex-row'>
      <ToggleBoardModalButton />
    </div>
  );
}
