import { PublicSpaceTasksSectionCurrent } from './current/main';
import { PublicSpaceTasksSectionDone } from './done/main';
import { PublicSpacesTasksSectionTodo } from './pending/main';

export function PublicSpaceTasksView() {
  return (
    <div className='flex w-[250px] flex-shrink-0 flex-grow flex-col space-y-[1rem]'>
      <PublicSpacesTasksSectionTodo />
      <PublicSpaceTasksSectionCurrent />
      <PublicSpaceTasksSectionDone />
    </div>
  );
}
