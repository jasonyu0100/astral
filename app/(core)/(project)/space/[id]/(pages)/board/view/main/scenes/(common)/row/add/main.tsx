import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { ButtonInputProps } from '@/(types)/props/main';

interface ScenesAddInputProps extends ButtonInputProps {
  children?: React.ReactNode;
}

export default function ScenesAdd({ children, ...props }: ScenesAddInputProps) {
  return (
    <button {...props}>
      <GlassAreaContainer
        name={ScenesAdd.name}
        sizeFx='w-[200px] h-[40px]'
        glassFx={glassFx['glass-5']}
        roundedFx={roundedFx['rounded-full']}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <div className='font-bold text-slate-500'>{children}</div>
        </div>
      </GlassAreaContainer>
    </button>
  );
}
