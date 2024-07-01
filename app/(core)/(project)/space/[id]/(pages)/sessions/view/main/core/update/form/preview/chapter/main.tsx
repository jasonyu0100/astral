import { useControllerForSpaceChapterMain } from '@/(server)/(controller)/space/chapter/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';

export function SpaceSessionsUpdatePreviewChapter() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const chapterController = useControllerForSpaceChapterMain(
    sessionUpdate.chapterId,
  );

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='text-xl font-bold text-slate-300'>
        {chapterController.state.obj?.title}
        <br />
        {chapterController.state.obj?.description}
      </p>
    </div>
  );
}
