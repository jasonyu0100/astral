import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ChaptersHandlerContext } from '@/(model)/(controller)/(archive)/chapters/main';
import { useContext } from 'react';

export function DraftChapterList() {
  const chaptersHandler = useContext(ChaptersHandlerContext);

  // TODO CLEAN UP
  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
      <div>
        <p className={`text-md font-bold text-slate-500`}>0. General</p>
      </div>
      <HorizontalDivider/>
      {chaptersHandler.chapters.map((chapter, index) => (
        <div key={chapter.id}>
          <p className={`text-md font-bold text-slate-500`}>
            {index + 1}. {chapter.title}
          </p>
        </div>
      ))}
    </div>
  );
}
