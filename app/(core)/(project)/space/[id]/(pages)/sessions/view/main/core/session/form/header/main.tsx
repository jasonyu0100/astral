import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { getFormattedAMPM } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceSessionsUpdateHeader() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );

  return (
    <div className='flex flex-col'>
      <p className='mb-[1rem] text-sm font-bold text-slate-300'>
        {sessionUpdateListController.state.objs.length} updates
      </p>
      <p className='text-xl font-bold text-slate-300'>
        {chapterListController.state.currentObj?.title}
      </p>
      <p className='text-sm font-light text-slate-300'>
        {getFormattedAMPM(new Date())}
      </p>
    </div>
  );
}
