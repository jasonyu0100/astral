import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/list';
import { ChapterSessionObj } from '@/(server)/(model)/space/chapter/session/main';
import { getFormattedAMPM } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceProgressCompleteSessionHeader() {
  const sessionListController = useContext(ContextForChapterSessionList);

  const updateListController = useContext(ContextForSessionUpdateList);
  const session =
    sessionListController.state.currentObj || ({} as ChapterSessionObj);

  return (
    <div className='flex flex-col'>
      <p className='mb-[1rem] text-sm font-bold text-slate-300'>
        {updateListController.state.objs.length} updates
      </p>
      <p className='text-xl font-bold text-slate-300'>{session?.title}</p>
      <p className='text-sm font-light text-slate-300'>
        {getFormattedAMPM(new Date(session.created))}
      </p>
    </div>
  );
}
