import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSessionUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { getFormattedAMPM } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpaceSessionCompleteSessionHeader() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateListFromChapter,
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
