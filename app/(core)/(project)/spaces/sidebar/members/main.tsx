import { ContextForSpaceMemberList } from '@/architecture/controller/space/member/list';
import { ContextForSpaceMemberObj } from '@/architecture/model/space/member/main';
import {
  ContextForUserPageRole,
  UserPageRole,
} from '@/architecture/model/user/main';
import { useContext } from 'react';
import { SpaceSidebarMembersListAdd } from './add/main';
import { SpaceSidebarMembersListMember } from './member/main';

export function SpaceSidebarMembersList() {
  const spaceMemberListController = useContext(ContextForSpaceMemberList);
  const userRole = useContext(ContextForUserPageRole);

  return (
    <div className='flex h-full w-full flex-col items-center space-y-[2rem] overflow-auto rounded-full'>
      {userRole === UserPageRole.OWNER ||
        (userRole === UserPageRole.MEMBER && <SpaceSidebarMembersListAdd />)}
      {spaceMemberListController.state.objs.map((obj) => (
        <ContextForSpaceMemberObj.Provider value={obj}>
          <SpaceSidebarMembersListMember />
        </ContextForSpaceMemberObj.Provider>
      ))}
    </div>
  );
}
