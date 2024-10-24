import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ContextForTaskList } from '@/(server)/controller/way/list';
import { AstralButtonRoundedAction } from '@/components/button/action/main';
import { CustomisableModalContents } from '@/components/modal/general/container/main';
import { CustomisableModal } from '@/components/modal/general/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext, useState } from 'react';

export function SpacesBoardAddTaskModal() {
  const user = useGlobalUser((state) => state.user);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const taskListController = useContext(ContextForTaskList);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
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
      <CustomisableModal>
        <CustomisableModalContents>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <div className='aspect-square h-full space-y-[2rem] bg-yellow-500 p-[2rem]'>
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
            <AstralButtonRoundedAction onClick={createTask}>
              <AstralArrowForwardIcon />
            </AstralButtonRoundedAction>
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
