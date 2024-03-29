import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { ButtonInputProps } from '@/(types)/main';

export default function ChaptersAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GlassAreaContainer
        name={ChaptersAdd.name}
        size='w-[200px] h-[40px]'
        glass={glassStyles['glass-5']}
        rounded={roundedStyles['rounded-full']}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <div className='font-bold text-slate-500'>Add Chapter</div>
        </div>
      </GlassAreaContainer>
    </button>
  );
}
