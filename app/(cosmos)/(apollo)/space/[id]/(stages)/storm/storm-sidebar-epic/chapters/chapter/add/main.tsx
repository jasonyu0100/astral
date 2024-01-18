import { chapterTable } from '@/tables/space/table';
import { useContext } from 'react';
import { StormContext } from '../../../../page';

export function StormChapterAdd() {
  const { chapterHandler } = useContext(StormContext);

  return (
    <div
      className='w-full'
      onClick={() =>
        chapterHandler.addChapter({
          ...chapterTable.example,
          id: new Date().toISOString(),
        })
      }
    >
      <p className='text-slate-500 font-extraBold text-xl'>Add Step</p>
    </div>
  );
}
