import { ToggleMapModalButton } from '../../../common/toggle/main';
import { StarEditButton } from './edit/main';
import { StarDeleteButton } from './delete/main';

export function MapHeaderStarLeft() {
  return (
    <div className='flex w-1/3 flex-row'>
      <ToggleMapModalButton />
      <StarEditButton />
      <StarDeleteButton />
    </div>
  );
}
