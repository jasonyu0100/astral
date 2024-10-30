import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForSpaceList } from '@/server/controller/space/list';
import { ContextForSpaceObj } from '@/server/model/space/main';
import { useContext } from 'react';
import { UserProfileSpacesRow } from './row/main';
import { AccountSpacesRowWrapper } from './wrapper/main';

export function UserProfileSpacesTableResults() {
  const spaceListHandler = useContext(ContextForSpaceList);
  return (
    <div className='w-full'>
      {spaceListHandler.state.objs?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <AccountSpacesRowWrapper key={space.id}>
              <UserProfileSpacesRow />
            </AccountSpacesRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
