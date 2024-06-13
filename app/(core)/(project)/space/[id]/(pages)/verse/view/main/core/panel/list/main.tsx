import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useContext } from 'react';

export function VerseChapterList() {
  const chaptersListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
      {chaptersListController.state.objs.map((chapter, index) => (
        <div key={chapter.id}>
          <p className={`text-sm font-bold text-slate-500`}>
            {index + 1}. {chapter.title}
          </p>
        </div>
      ))}
    </div>
  );
}
