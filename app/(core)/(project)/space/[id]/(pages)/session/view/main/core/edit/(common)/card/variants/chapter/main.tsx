import { useControllerForSpaceChapterMain } from '@/(server)/(controller)/space/chapter/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';
import { SpaceSessionEditCard } from '../../main';

export function SpaceSessionCardChapter() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const chapterController = useControllerForSpaceChapterMain(
    sessionUpdate.chapterId,
  );

  return (
    <SpaceSessionEditCard>
      <p className='text-xl font-bold text-slate-300'>
        {chapterController.state.obj?.title}
      </p>
      <p className='text-lg font-light text-slate-300'>New Chapter</p>
    </SpaceSessionEditCard>
  );
}
