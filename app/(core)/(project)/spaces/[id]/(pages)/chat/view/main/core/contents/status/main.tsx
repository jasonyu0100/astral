import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesChatStatusContents() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex h-[8rem] w-full p-[1rem]'>
      <GlassWindowFrame className='flex w-full' borderFx={borderFx['border-b']}>
        <GlassWindowContents className='flex w-full flex-col justify-center px-[1rem]'>
          <p className='text-2xl font-bold text-slate-300'>
            {chapterListController.state.currentObj?.title}
          </p>
          <p className='text-lg font-light text-slate-300'>
            {chapterListController.state.currentObj?.objective}
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
