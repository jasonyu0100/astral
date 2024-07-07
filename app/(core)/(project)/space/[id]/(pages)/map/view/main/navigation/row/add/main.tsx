import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { ButtonInputProps } from '@/(types)/props/main';

interface NavigationTimelineInputProps extends ButtonInputProps {
  children?: React.ReactNode;
}

export default function SpaceMapRowAdd({
  children,
  ...props
}: NavigationTimelineInputProps) {
  return (
    <button {...props}>
      <GlassAreaContainer
        name={SpaceMapRowAdd.name}
        sizeFx='w-[200px] h-[40px]'
        glassFx={glassFx['glass-5']}
        roundedFx={roundedFx['rounded-full']}
        borderFx={borderFx['border-all']}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <div className='font-bold text-slate-700'>{children}</div>
        </div>
      </GlassAreaContainer>
    </button>
  );
}
