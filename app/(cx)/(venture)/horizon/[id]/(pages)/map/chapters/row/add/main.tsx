import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import {
  glassFx,
  roundedFx,
} from '@/(fx)/data';
import { ButtonInputProps } from '@/(types)/element/main';

export default function ChaptersAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GlassAreaContainer
        name={ChaptersAdd.name}
        sizeFx='w-[200px] h-[40px]'
        glassFx={glassFx['glass-5']}
        roundedFx={roundedFx['rounded-full']}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <div className='font-bold text-slate-500'>Add Chapter</div>
        </div>
      </GlassAreaContainer>
    </button>
  );
}
