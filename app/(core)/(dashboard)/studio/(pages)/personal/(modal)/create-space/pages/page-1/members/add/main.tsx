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
      className='h-[50px] w-[50px]'
    >
      <GlassWindowContents
        className='flex cursor-pointer items-center justify-center rounded-full bg-blue-500'
        onClick={onClick}
      >
        <AstralAddIcon className='h-1/2 w-1/2' />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
