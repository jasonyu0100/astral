import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ProfileSpacesRow } from './item/main';
import { AccountSpacesRowWrapper } from './wrapper/main';

export function ProfileSpacesLiveResults() {
  const spaceListHandler = useContext(ContextForSpaceList);
  return (
    <div className='w-full py-[1rem]'>
      {spaceListHandler.state.objs?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <AccountSpacesRowWrapper key={space.id}>
              <ProfileSpacesRow />
            </AccountSpacesRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
