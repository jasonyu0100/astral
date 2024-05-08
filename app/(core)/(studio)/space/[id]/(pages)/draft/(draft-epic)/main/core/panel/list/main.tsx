import { ChaptersHandlerContext } from '@/(types)/handler/chapters/main';
import { useContext } from 'react';

export function DraftChapterList() {
  const chaptersHandler = useContext(ChaptersHandlerContext);

  // TODO CLEAN UP
  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
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
