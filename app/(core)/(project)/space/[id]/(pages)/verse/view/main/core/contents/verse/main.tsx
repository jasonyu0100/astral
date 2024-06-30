import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { borderFx, glassFx } from '@/(style)/data';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceVerseContentsVerse() {
  const verseListController = useContext(ContextForChapterVerseList);

  return (
    <GlassWindowFrame
      className='w-full p-[2rem] py-[4rem]'
      borderFx={`${borderFx['border-l']} ${borderFx['border-r']}`}
    >
      <GlassWindowContents className='flex w-full flex-row items-center space-x-[2rem]'>
        <p className='font-bold text-slate-500'>
          V
          {verseListController.state.objs.length -
            verseListController.state.index}
        </p>
        <img
          className='aspect-square h-[300px] border-[5px] border-white object-cover'
          src={verseListController.state.currentObj?.fileElem?.src}
        />
        <div className='space-y-[0.5rem] px-[0.5rem]'>
          <p className=' text-sm font-light text-white'>
            {getFormattedDate(
              new Date(verseListController.state.currentObj?.created ?? ''),
            )}
          </p>
          <p className='text-xl font-bold text-white'>
            Verse - {verseListController.state.currentObj?.title}
          </p>
          <p className=' text-white'>
            {verseListController.state.currentObj?.description}
          </p>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
