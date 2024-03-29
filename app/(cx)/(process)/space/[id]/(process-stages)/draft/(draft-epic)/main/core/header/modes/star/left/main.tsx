import { ToggleDraftModalButton } from '../../../common/toggle/main';
import { StarEditButton } from './edit/main';
import { StarDeleteButton } from './delete/main';

export function DraftHeaderStarLeft() {
  return (
    <div className='flex w-1/3 flex-row'>
      <ToggleDraftModalButton />
      <StarEditButton />
      <StarDeleteButton />
    </div>
  );
}
