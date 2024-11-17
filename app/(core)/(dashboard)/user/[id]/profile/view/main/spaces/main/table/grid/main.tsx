import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { UserProfileSpacesRow } from './item/main';
import { UserProfileSpacesRowWrapper } from './wrapper/main';

export function UserProfileSpacesResults() {
  const spaceListHandler = useContext(ContextForSpaceList);
  return (
    <div className='w-full'>
      {spaceListHandler.state.objs?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <UserProfileSpacesRowWrapper key={space.id}>
              <UserProfileSpacesRow />
            </UserProfileSpacesRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
