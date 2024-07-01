import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { getFormattedAMPM } from '@/(utils)/dateFormat';
import { ChapterSessionUpdateObj } from '@/graphql/API';
import { useContext } from 'react';

export function SpaceProgressUpdateFormHeader() {
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );
  const current =
    sessionUpdateListController.state.currentObj ||
    ({} as ChapterSessionUpdateObj);

  return (
    <div className='flex flex-col'>
      <p className='text-sm font-bold text-slate-300'>
        {sessionUpdateListController.state.index + 1} of{' '}
        {sessionUpdateListController.state.objs.length}
      </p>
      <p className='text-xl font-bold text-slate-300'>
        {current?.variant?.toLowerCase() || ''} update
      </p>
      <p className='text-sm font-light text-slate-300'>
        {getFormattedAMPM(new Date(current.created))}
        {current?.added ? ' - added' : ' - not added'}
      </p>
    </div>
  );
}
