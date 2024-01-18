import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, borderStyles } from '@/(common)/styles/data';
import { chapterTable } from '@/tables/space/table';
import { useContext } from 'react';
import { FlowContext } from '../../../../page';

export default function FlowChaptersAdd() {
  const { chapterHandler } = useContext(FlowContext);

  return (
    <button
      onClick={() =>
        chapterHandler.addChapter({
          ...chapterTable.example,
          id: Date.now().toFixed().toString(),
        })
      }
    >
      <Layer
        displayName={FlowChaptersAdd.name}
        sizeStyle='w-[200px] h-[40px]'
        backgroundStyle={backgroundStyles['glass-5']}
        borderStyle={borderStyles['rounded-full']}
      >
        <div className='w-full h-full justify-center flex items-center'>
          <div className='text-slate-500 font-bold'>Add</div>
        </div>
      </Layer>
    </button>
  );
}
