import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { StudioPersonalRow } from './row/main';
import { StudioPersonalRowWrapper } from './wrapper/main';

export function StudioPersonalTableResults() {
  const spaceListHandler = useContext(ContextForSpaceList);
  return (
    <div className='w-full px-[3rem] py-[1rem]'>
      {spaceListHandler.state.objs?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <StudioPersonalRowWrapper key={space.id}>
              <StudioPersonalRow />
            </StudioPersonalRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
