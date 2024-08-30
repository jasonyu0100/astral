import { AstralKanbanIcon } from '@/icons/kanban/main';
import { AstralTimelineIcon } from '@/icons/timeline/main';

export function SpaceJourneyHeaderLeft() {
  return (
    <div className='flex w-1/3 flex-row space-x-[1rem]'>
      <AstralTimelineIcon />
      <AstralKanbanIcon />
    </div>
  );
}
