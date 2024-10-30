import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useControllerForSpaceMain } from '@/server/controller/space/main';
import { ContextForSpaceMemberListFromUser } from '@/server/controller/space/member/list-from-user';
import { ContextForSpaceObj } from '@/server/model/space/main';
import { ContextForSpaceMemberObj } from '@/server/model/space/member/main';
import { useContext } from 'react';
import { StudioSpacesRow } from './row/main';
import { StudioSpacesRowWrapper } from './wrapper/main';

export function StudioSpacesTableResults() {
  const spaceMemberListController = useContext(
    ContextForSpaceMemberListFromUser,
  );

  return (
    <div className='w-full px-[3rem]'>
      {spaceMemberListController.state.objs?.map((member, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForSpaceMemberObj.Provider value={member} key={member.id}>
            <StudioSharedSpace />
          </ContextForSpaceMemberObj.Provider>
        </ContextForIndexable.Provider>
      ))}
    </div>
  );
}

function StudioSharedSpace() {
  const spaceMemberObj = useContext(ContextForSpaceMemberObj);
  const spaceMainController = useControllerForSpaceMain(spaceMemberObj.spaceId);

  return (
    <>
      {spaceMainController.state.obj && (
        <ContextForSpaceObj.Provider value={spaceMainController.state.obj}>
          <StudioSpacesRowWrapper>
            <StudioSpacesRow />
          </StudioSpacesRowWrapper>
        </ContextForSpaceObj.Provider>
      )}
    </>
  );
}
