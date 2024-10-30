import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForSpaceList } from '@/server/controller/space/list';
import { ContextForSpaceObj } from '@/server/model/space/main';
import { useContext } from 'react';
import { StudioSpacesRow } from './row/main';
import { StudioSpacesRowWrapper } from './wrapper/main';

export function StudioSpacesTableResults() {
  const spaceListHandler = useContext(ContextForSpaceList);
  return (
    <div className='w-full px-[3rem] py-[1rem]'>
      {spaceListHandler.state.objs?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <StudioSpacesRowWrapper key={space.id}>
              <StudioSpacesRow />
            </StudioSpacesRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
