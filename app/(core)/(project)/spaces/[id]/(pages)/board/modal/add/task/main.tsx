import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ContextForTaskList } from '@/(server)/controller/way/list';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { CustomisableModalContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { useContext, useState } from 'react';

export function SpacesBoardAddTaskModal() {
  const user = useGlobalUser((state) => state.user);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const wayListController = useContext(ContextForTaskList);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  async function createLog() {
    const log = await wayListController.actions.createActions.createLog(
      chapterListController.state.objId,
      user.id,
      title,
      description,
    );
    await activityListController.actions.createActions.createFromChapterLog(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      log.id,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <CustomisableModalContents>
          <div className='aspect-square h-full space-y-[2rem] bg-yellow-500 p-[3rem]'>
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
          <div
            onClick={createLog}
            className='flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-blue-500'
          >
            <AstralArrowForwardIcon />
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
