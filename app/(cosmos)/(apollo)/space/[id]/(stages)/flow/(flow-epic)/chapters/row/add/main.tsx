import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, borderStyles } from '@/(common)/styles/data';
import { ButtonInputProps } from '@/(common)/types/main';

export default function FlowChaptersAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <Layer
        displayName={FlowChaptersAdd.name}
        sizeStyle='w-[200px] h-[40px]'
        backgroundStyle={backgroundStyles['glass-5']}
        borderStyle={borderStyles['rounded-full']}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <div className='font-bold text-slate-500'>Add Chapter</div>
        </div>
      </Layer>
    </button>
  );
}
