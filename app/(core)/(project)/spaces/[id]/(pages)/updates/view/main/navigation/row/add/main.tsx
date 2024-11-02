import { GlassAreaContainer } from '@/components/glass/area/main';
import { AstralAddIcon } from '@/icons/add/main';
import { ButtonInputProps } from '@/props/main';
import { glassFx, roundedFx } from '@/style/data';

interface NavigationTimelineInputProps extends ButtonInputProps {}

export default function SpacesUpdatesRowAdd({
  ...props
}: NavigationTimelineInputProps) {
  return (
    <button {...props}>
      <GlassAreaContainer
        name={SpacesUpdatesRowAdd.name}
        sizeFx='min-w-[250px] h-[3.5rem]'
        glassFx={glassFx['glass-5']}
        roundedFx={roundedFx['rounded-full']}
      >
        <div className='flex h-full w-full items-center space-x-[1rem] p-[1rem]'>
          <AstralAddIcon className='fill-slate-500' />
          <div className='font-bold text-slate-500'>Add Post</div>
        </div>
      </GlassAreaContainer>
    </button>
  );
}
