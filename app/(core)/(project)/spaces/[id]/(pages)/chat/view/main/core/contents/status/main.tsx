import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForTaskList } from '@/server/controller/way/list';
import { TaskStatus } from '@/server/model/task/main';
import { borderFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesChatStatusContents() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const taskListController = useContext(ContextForTaskList);
  const inProgress = taskListController.state.objs.filter(
    (obj) => obj.taskStatus === TaskStatus.IN_PROGRESS,
  );

  return (
    <GlassWindowFrame
      className='flex h-[200px] w-full p-[2rem]'
      borderFx={borderFx['border-b']}
    >
      <GlassWindowContents className='flex w-full flex-row justify-between space-x-[1rem]'>
        <div className='flex flex-col space-y-[1rem]'>
          <p className='text-2xl font-bold text-slate-300'>
            {chapterListController.state.currentObj?.title}
          </p>
          <p className='text-lg font-light text-slate-300'>
            <span className='font-bold'>Objective: </span>
            {chapterListController.state.currentObj?.objective}
          </p>
          <p className='text-lg font-light text-slate-300'>
            <span className='font-bold'>Summary: </span>
            {chapterListController.state.currentObj?.description}
          </p>
        </div>
        {inProgress.map((task) => (
          <div className='h-[200px] min-w-[200px] max-w-[250px] overflow-auto rounded-lg bg-yellow-500 p-[1rem]'>
            <p className='text-lg font-bold'>
              {task.title} {task.taskStatus}
            </p>
            <p className='text-sm font-light'>{task.description}</p>
          </div>
        ))}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
