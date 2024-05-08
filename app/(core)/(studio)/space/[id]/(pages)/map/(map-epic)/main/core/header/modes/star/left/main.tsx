import { ToggleMapModalButton } from '../../../common/toggle/main';
import { IdeaEditButton } from './edit/main';
import { IdeaDeleteButton } from './delete/main';

export function MapHeaderIdeaLeft() {
  return (
    <div className='flex w-1/3 flex-row'>
      <ToggleMapModalButton />
      <IdeaEditButton />
      <IdeaDeleteButton />
    </div>
  );
}
