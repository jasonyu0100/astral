import { Glass } from '@/(components)/glass/main';
import { backgroundStyles, borderStyles } from '@/(components)/styles/data';
import { ButtonInputProps } from '@/(components)/types/main';

export default function DraftChaptersAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <Glass
        displayName={DraftChaptersAdd.name}
        sizeStyle='w-[200px] h-[40px]'
        backgroundStyle={backgroundStyles['glass-5']}
        borderStyle={borderStyles['rounded-full']}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <div className='font-bold text-slate-500'>Add Chapter</div>
        </div>
      </Glass>
    </button>
  );
}
