import { AstralAddIcon } from '@/icons/add/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function SpaceFlightSidebarAddReview({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <div
      className='flex h-[70px] w-full cursor-pointer flex-row items-center space-x-[2rem]'
      onClick={onClick}
    >
      <GlassWindowFrame className='aspect-square h-full'>
        <GlassWindowContents className='flex items-center justify-center'>
          <AstralAddIcon />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <div className='flex flex-col'>
        <p className='text-sm font-bold text-white'>New Review</p>
      </div>
    </div>
  );
}
