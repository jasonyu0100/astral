import { ContextForSpaceMemberOfUserList } from '@/(server)/controller/space/member/user-list';
import { ContextForSpaceMemberObj } from '@/(server)/model/space/member/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { StudioSpacesRow } from './row/main';
import { StudioSpacesRowWrapper } from './wrapper/main';

export function StudioSpacesTableResults() {
  const memberListController = useContext(ContextForSpaceMemberOfUserList);

  return (
    <div className='w-full px-[3rem]'>
      {memberListController.state.objs.map((spaceMember, index) => (
        <ContextForSpaceMemberObj.Provider
          value={spaceMember}
          key={spaceMember.id}
        >
          <ContextForIndexable.Provider value={index}>
            <StudioSpacesRowWrapper>
              <StudioSpacesRow />
            </StudioSpacesRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceMemberObj.Provider>
      ))}
    </div>
  );
}
