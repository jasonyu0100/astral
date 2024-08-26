import { glassFx, roundedFx } from '@/style/data';
import { ButtonInputProps } from '@/types/props/main';
import { GlassAreaContainer } from '@/ui/(glass)/area/main';

interface NavigationTimelineInputProps extends ButtonInputProps {
  children?: React.ReactNode;
}

export default function SpaceReviewRowAdd({
  children,
  ...props
}: NavigationTimelineInputProps) {
  return (
    <button {...props}>
      <GlassAreaContainer
        name={SpaceReviewRowAdd.name}
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
