import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { PublicSpaceTasksSectionCurrent } from './current/main';
import { PublicSpaceTasksSectionDone } from './done/main';
import { PublicSpacesTasksSectionTodo } from './pending/main';

export function PublicSpaceTasksView() {
  return (
    <div className='flex w-[300px] flex-shrink-0 flex-grow flex-col space-y-[1rem] border-l-[1px] border-slate-300 border-opacity-30 pl-[2rem]'>
      <p className='text-2xl font-bold text-slate-300'>Mission</p>
      <HorizontalDivider />
      <PublicSpacesTasksSectionTodo />
      <PublicSpaceTasksSectionCurrent />
      <PublicSpaceTasksSectionDone />
    </div>
  );
}
