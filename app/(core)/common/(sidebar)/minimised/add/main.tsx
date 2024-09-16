import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function CommonSidebarMinimisedFriendsAdd() {
  return (
    <GlassWindowFrame
      className='h-[2.5rem] w-[2.5rem]'
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents className='flex h-full w-full items-center justify-center'>
        <AstralAddIcon />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
