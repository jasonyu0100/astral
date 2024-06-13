import { ToggleBoardModalButton } from '../../../common/toggle/main';
import { IdeaEditButton } from './edit/main';
import { IdeaDeleteButton } from './delete/main';

export function BoardHeaderIdeaLeft() {
  return (
    <div className='flex w-1/3 flex-row'>
      <ToggleBoardModalButton />
      <IdeaEditButton />
      <IdeaDeleteButton />
    </div>
  );
}
