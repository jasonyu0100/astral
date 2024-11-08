import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { UserProfileSpacesRow } from './row/main';
import { AccountSpacesRowWrapper } from './wrapper/main';

export function UserProfileSpacesLiveResults() {
  const spaceListHandler = useContext(ContextForSpaceList);
  return (
    <div className='w-full py-[1rem]'>
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
