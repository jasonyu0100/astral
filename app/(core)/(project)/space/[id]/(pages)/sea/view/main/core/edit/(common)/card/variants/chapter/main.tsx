import { useControllerForSpaceChapterMain } from '@/(server)/(controller)/space/chapter/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';
import { SpaceSeaEditCard } from '../../main';

export function SpaceSeaCardChapter() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const chapterController = useControllerForSpaceChapterMain(
    sessionUpdate.chapterId,
  );

  return (
    <SpaceSeaEditCard>
      <p className='text-xl font-bold text-slate-300'>
        {chapterController.state.obj?.title}
      </p>
      <p className='text-lg font-light text-slate-300'>New Chapter</p>
    </SpaceSeaEditCard>
  );
}
