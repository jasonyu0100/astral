import { GlassAreaContainer } from '@/components/glass/area/main';
import { AstralAddIcon } from '@/icons/add/main';
import { ButtonInputProps } from '@/props/main';
import { glassFx, roundedFx } from '@/style/data';

interface NavigationTimelineInputProps extends ButtonInputProps {}

export default function SpacesLiveRowAdd({
  ...props
}: NavigationTimelineInputProps) {
  return (
    <button {...props}>
      <GlassAreaContainer
        name={SpacesLiveRowAdd.name}
        sizeFx='min-w-[200px] h-[3.5rem]'
        glassFx={glassFx['glass-5']}
        roundedFx={roundedFx['rounded-full']}
      >
        <div className='flex h-full w-full items-center space-x-[1rem] p-[1rem]'>
          <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-blue-500'>
            <AstralAddIcon />
          </div>
          <div className='font-bold text-slate-300'>Add Post</div>
        </div>
      </GlassAreaContainer>
    </button>
  );
}
