import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForSpaceList } from '@/server/controller/space/list';
import { ContextForSpaceObj } from '@/server/model/space/main';
import { useContext } from 'react';
import { UserProfileSpacesRow } from './row/main';
import { StudioSpacesRowWrapper } from './wrapper/main';

export function UserProfileSpacesTableResults() {
  const spaceListHandler = useContext(ContextForSpaceList);
  return (
    <div className='w-full py-[1rem]'>
      {spaceListHandler.state.objs?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <StudioSpacesRowWrapper key={space.id}>
              <UserProfileSpacesRow />
            </StudioSpacesRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
