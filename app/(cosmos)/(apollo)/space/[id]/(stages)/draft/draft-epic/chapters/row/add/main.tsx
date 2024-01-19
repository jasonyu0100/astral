import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, borderStyles } from '@/(common)/styles/data';
import { useContext } from 'react';
import { DraftContext } from '../../../../page';
import { chapterTable } from '@/tables/space/table';
import { ButtonInputProps } from '@/(common)/types/main';

export default function DraftChaptersAdd({ ...props } : ButtonInputProps) {
  const { chapterHandler } = useContext(DraftContext);
  return (
    <button {...props}
    >
      <Layer
        displayName={DraftChaptersAdd.name}
        sizeStyle='w-[200px] h-[40px]'
        backgroundStyle={backgroundStyles['glass-5']}
        borderStyle={borderStyles['rounded-full']}
      >
        <div className='w-full h-full justify-center flex items-center'>
          <div className='text-slate-500 font-bold'>Add Chapter</div>
        </div>
      </Layer>
    </button>
  );
}
