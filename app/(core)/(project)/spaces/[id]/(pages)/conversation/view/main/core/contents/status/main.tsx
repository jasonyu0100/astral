import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';

export function SpacesConversationStatusContents() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex h-[10rem] w-full p-[1rem]'>
      <GlassWindowFrame className='flex w-full' borderFx={borderFx['border-b']}>
        <GlassWindowContents className='flex w-full flex-col justify-center px-[1rem]'>
          <p className='text-xl font-bold text-slate-300'>
            {chapterListController.state.currentObj?.title}
          </p>
          <p className='text-md font-light text-slate-300'>
            {chapterListController.state.currentObj?.description}
          </p>
          <p className='text-md font-light text-slate-300'>
            {chapterListController.state.currentObj?.objective}
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
