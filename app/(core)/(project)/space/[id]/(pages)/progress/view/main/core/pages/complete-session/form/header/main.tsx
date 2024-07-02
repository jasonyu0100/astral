import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { glassFx } from '@/(style)/data';
import { getFormattedAMPM } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceProgressCompleteSessionHeader() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );

  return (
    <GlassWindowFrame className='w-full'>
      <GlassWindowContents className='flex flex-col p-[1rem]'>
        <p className='mb-[1rem] text-sm font-bold text-slate-300'>
          {sessionUpdateListController.state.objs.length} updates
        </p>
        <p className='text-xl font-bold text-slate-300'>
          {chapterListController.state.currentObj?.title}
        </p>
        <p className='text-sm font-light text-slate-300'>
          {getFormattedAMPM(new Date())}
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
