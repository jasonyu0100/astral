import { ContextForSpaceMemberList } from '@/(server)/controller/space/member/list';
import { ContextForSpaceMemberObj } from '@/(server)/model/space/member/main';
import { useContext } from 'react';
import { SpaceSidebarMembersListAdd } from './add/main';
import { SpaceSidebarMembersListMember } from './member/main';

export function SpaceSidebarMembersList() {
  const spaceMemberListController = useContext(ContextForSpaceMemberList);

  return (
    <div className='flex h-full w-full flex-col items-center space-y-[2rem] overflow-auto rounded-full'>
      <SpaceSidebarMembersListAdd />
      {spaceMemberListController.state.objs.map((obj) => (
        <ContextForSpaceMemberObj.Provider value={obj}>
          <SpaceSidebarMembersListMember />
        </ContextForSpaceMemberObj.Provider>
      ))}
    </div>
  );
}
