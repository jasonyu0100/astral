import { ContextForSpaceMemberList } from '@/(server)/controller/space/member/list';
import { ContextForSpaceMemberObj } from '@/(server)/model/space/member/main';
import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { SpaceSidebarMembersListMember } from './member/main';

export function SpaceSidebarMembersList() {
  const spaceMemberListController = useContext(ContextForSpaceMemberList);

  return (
    <div className='flex h-full w-full flex-col items-center space-y-[2rem] overflow-auto rounded-full'>
      <GlassWindowFrame
        className='h-[2.5rem] w-[2.5rem] flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className='flex h-full w-full cursor-pointer items-center justify-center'
          onClick={() => {}}
        >
          <AstralAddIcon />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
      {spaceMemberListController.state.objs.map((obj) => (
        <ContextForSpaceMemberObj.Provider value={obj}>
          <SpaceSidebarMembersListMember />
        </ContextForSpaceMemberObj.Provider>
      ))}
    </div>
  );
}
