import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import {
  glassStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { ButtonInputProps } from '@/(types)/main';

export default function ChaptersAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GlassContainer
        displayName={ChaptersAdd.name}
        sizeStyle='w-[200px] h-[40px]'
        glassStyle={glassStyles['glass-5']}
        roundedStyle={roundedStyles['rounded-full']}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <div className='font-bold text-slate-500'>Add Chapter</div>
        </div>
      </GlassContainer>
    </button>
  );
}
