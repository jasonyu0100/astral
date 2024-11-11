import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { HomePersonalRow } from './row/main';
import { HomePersonalRowWrapper } from './wrapper/main';

export function HomePersonalTableGrid() {
  const spaceListController = useContext(ContextForSpaceList);
  return (
    <div className='w-full px-[3rem] py-[1rem]'>
      {spaceListController.state.objs?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <HomePersonalRowWrapper key={space.id}>
              <HomePersonalRow />
            </HomePersonalRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
