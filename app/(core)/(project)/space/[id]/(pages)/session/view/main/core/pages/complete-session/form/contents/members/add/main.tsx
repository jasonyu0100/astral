import { AstralAddIcon } from '@/icons/add/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function SpaceSessionAddCollaborator({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <GlassWindowFrame
      roundedFx={roundedFx['rounded-full']}
      borderFx={borderFx['border-around']}
      className='h-[50px] w-[50px]'
    >
      <GlassWindowContents
        className='flex cursor-pointer items-center justify-center rounded-full'
        onClick={onClick}
      >
        <AstralAddIcon />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
