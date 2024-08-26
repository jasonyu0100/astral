import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { getFormattedAMPM } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceSessionCompleteSessionHeader() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );

  return (
    <GlassWindowFrame className='w-full'>
      <GlassWindowContents className='flex flex-col p-[1rem]'>
        <p className='text-sm font-bold text-slate-300'>
          {sessionUpdateListController.state.objs.length} updates
        </p>
        <p className='text-xl font-bold text-slate-300'>
          {chapterListController.state.currentObj?.title}
        </p>
        <p className='text-sm font-light text-slate-300'>
          {getFormattedAMPM(new Date())}
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
