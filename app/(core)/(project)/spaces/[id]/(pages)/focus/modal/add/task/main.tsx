import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForTaskListFromChapter } from '@/architecture/controller/task/list-from-chapter';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext, useRef, useState } from 'react';

export function SpacesFocusAddTaskModal() {
  const user = useGlobalUser((state) => state.user);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const taskListController = useContext(ContextForTaskListFromChapter);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  async function createTask() {
    const task = await taskListController.actions.createActions.createTask(
      chapterListController.state.objId,
      user.id,
      title,
      description,
      spaceController.state.objId,
    );
    await activityListController.actions.createActions.createFromChapterTask(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      task.id,
    );
    openableController.close();
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line from being added
      createTask();
    }
  };

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBodyContents>
            <div className='aspect-square w-[400px] space-y-[2rem] bg-yellow-500 p-[2rem]'>
              <input
                placeholder='Enter title here...'
                className='w-full bg-transparent text-lg font-bold outline-none placeholder:text-slate-800'
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    descriptionRef.current?.focus();
                  }
                }}
              />
              <textarea
                ref={descriptionRef}
                placeholder='Enter description here...'
                className='h-full w-full bg-transparent text-sm font-light outline-none placeholder:text-slate-800'
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </AstralModalBodyContents>
          <AstralModalBodyAction>
            <AstralRoundedActionButton onClick={createTask}>
              <AstralArrowForwardIcon />
            </AstralRoundedActionButton>
          </AstralModalBodyAction>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
