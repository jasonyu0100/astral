import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForSpacesSidebarModals } from '../../modal/controller/main';

export function SpaceSidebarMembersListAdd() {
  const spacesSidebarModals = useContext(ContextForSpacesSidebarModals);

  return (
    <GlassWindowFrame
      className='h-[2.5rem] w-[2.5rem] flex-shrink-0'
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents
        className='flex h-full w-full cursor-pointer items-center justify-center'
        onClick={() => spacesSidebarModals.addMemberController.open()}
      >
        <AstralAddIcon />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
