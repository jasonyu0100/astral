import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { ContextForConversationMessageList } from '@/server/controller/conversation/message/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForTaskList } from '@/server/controller/way/list';
import { TaskStatus } from '@/server/model/task/main';
import { borderFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesChatStatusContents() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const messageListController = useContext(ContextForConversationMessageList);
  const taskListController = useContext(ContextForTaskList);
  const inProgress = taskListController.state.objs.filter(
    (obj) => obj.taskStatus === TaskStatus.IN_PROGRESS,
  );
  const inProgressTask = inProgress.at(0);

  return (
    <div className='h-[200px] p-[1rem]'>
      <GlassWindowFrame
        className='flex h-full w-full'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents className='flex w-full flex-row justify-between space-x-[1rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <p className='text-2xl font-bold text-slate-300'>
                {chapterListController.state.currentObj?.title}
              </p>
              <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-blue-500'>
                <p className='text-lg font-bold text-slate-300'>
                  {messageListController.state.objs.length}
                </p>
              </div>
            </div>
            <div className='flex flex-col space-y-[0.5rem]'>
              <p className='text-lg font-light text-slate-300'>
                {chapterListController.state.currentObj?.objective}
              </p>
              <p className='text-lg font-light text-slate-300'>
                {chapterListController.state.currentObj?.description}
              </p>
            </div>
          </div>
          {inProgressTask ? (
            <div className='h-[200px] min-w-[200px] max-w-[250px] overflow-auto rounded-lg bg-yellow-500 p-[1rem]'>
              <div className='flex flex-col'>
                <div className='flex w-full flex-row justify-between space-x-[1rem]'>
                  <p className='text-lg font-bold'>{inProgressTask.title}</p>
                  <div className='flex h-[2rem] w-[2rem] flex-shrink-0 items-center justify-center rounded-full bg-red-500'>
                    <p className='text-md font-bold text-slate-300'>
                      {inProgress.length}
                    </p>
                  </div>
                </div>
                <p className='text-sm font-light'>
                  {inProgressTask.description}
                </p>
              </div>
            </div>
          ) : (
            <div className='h-[200px] min-w-[200px] max-w-[250px] overflow-auto rounded-lg bg-yellow-500 p-[1rem]'>
              <p className='text-lg font-bold'>No task in-progress</p>
            </div>
          )}
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
