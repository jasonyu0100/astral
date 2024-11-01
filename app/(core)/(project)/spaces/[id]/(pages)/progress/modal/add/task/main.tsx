import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ContextForTaskList } from '@/server/controller/task/list';
import { useContext, useState } from 'react';

export function SpacesProgressAddTaskModal() {
  const user = useGlobalUser((state) => state.user);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const taskListController = useContext(ContextForTaskList);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );

  async function createTask() {
    const task = await taskListController.actions.createActions.createTask(
      chapterListController.state.objId,
      user.id,
      title,
      description,
    );
    await activityListController.actions.createActions.createFromChapterTask(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      task.id,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Add to Todo</AstralModalTitle>
              <div className='aspect-square w-[400px] space-y-[2rem] bg-yellow-500 p-[2rem]'>
                <input
                  placeholder='Enter title here...'
                  className='w-full bg-transparent outline-none placeholder:text-slate-800'
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  placeholder='Enter description here...'
                  className='h-full w-full bg-transparent outline-none placeholder:text-slate-800'
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={createTask}>
                <AstralArrowForwardIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
