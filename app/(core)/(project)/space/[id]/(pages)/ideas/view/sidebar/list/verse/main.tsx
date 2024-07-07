import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForChapterVerseObj } from '@/(server)/(model)/space/chapter/verse/main';
import { useContext } from 'react';

export function SpaceIdeasSidebarVerse() {
  const verse = useContext(ContextForChapterVerseObj);
  const verseListController = useContext(ContextForChapterVerseList);

  return (
    <div
      className='flex h-[70px] w-full cursor-pointer cursor-pointer flex-row items-center space-x-[2rem]'
      onClick={() => verseListController.actions.stateActions.select(verse)}
    >
      <img src={exampleFileElem.src} className='aspect-square h-full rounded' />
      <div className='flex flex-col'>
        <p className='text-md font-bold text-slate-800'>{verse.title}</p>
        <p className='text-sm text-slate-900'>{verse.description}</p>
      </div>
    </div>
  );
}
