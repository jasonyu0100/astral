import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, borderStyles } from '@/(design)/(styles)/data';
import { ButtonInputProps } from '@/(types)/main';

export default function DraftChaptersAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GlassContainer
        displayName={DraftChaptersAdd.name}
        sizeStyle='w-[200px] h-[40px]'
        glassStyle={backgroundStyles['glass-5']}
        borderStyle={borderStyles['rounded-full']}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <div className='font-bold text-slate-500'>Add Chapter</div>
        </div>
      </GlassContainer>
    </button>
  );
}
