import { useControllerForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForSpaceMemberListFromUser } from '@/architecture/controller/space/member/list-from-user';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { ContextForSpaceMemberObj } from '@/architecture/model/space/member/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { HomeSharedRow } from './row/main';
import { HomeSharedRowWrapper } from './wrapper/main';

export function HomeSharedTableResults() {
  const spaceMemberListController = useContext(
    ContextForSpaceMemberListFromUser,
  );

  return (
    <div className='w-full px-[3rem] py-[1rem]'>
      {spaceMemberListController.state.objs?.map((member, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForSpaceMemberObj.Provider value={member} key={member.id}>
            <HomeSharedSpace />
          </ContextForSpaceMemberObj.Provider>
        </ContextForIndexable.Provider>
      ))}
    </div>
  );
}

function HomeSharedSpace() {
  const spaceMemberObj = useContext(ContextForSpaceMemberObj);
  const spaceMainController = useControllerForSpaceMain(spaceMemberObj.spaceId);

  return (
    <>
      {spaceMainController.state.obj && (
        <ContextForSpaceObj.Provider value={spaceMainController.state.obj}>
          <HomeSharedRowWrapper>
            <HomeSharedRow />
          </HomeSharedRowWrapper>
        </ContextForSpaceObj.Provider>
      )}
    </>
  );
}
