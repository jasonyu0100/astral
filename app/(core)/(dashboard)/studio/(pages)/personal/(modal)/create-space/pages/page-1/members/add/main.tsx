import { AstralAddIcon } from '@/icons/add/main';
import { roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export function CreateSpaceAddCollaborator({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <GlassWindowFrame
      roundedFx={roundedFx['rounded-full']}
      className='h-[2.5rem] w-[2.5rem]'
    >
      <GlassWindowContents
        className='flex cursor-pointer items-center justify-center rounded-full bg-blue-500'
        onClick={onClick}
      >
        <AstralAddIcon className='h-1/2 w-1/2 fill-white' />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
