import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  roundedFx,
} from '@/(style)/data';
import { ButtonInputProps } from '@/(types)/props/main';

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
          <div className='font-bold text-slate-500'>Add Part</div>
        </div>
      </GlassAreaContainer>
    </button>
  );
}
