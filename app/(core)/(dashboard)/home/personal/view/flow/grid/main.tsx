import { ContextForSpaceObj, SpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { HomePersonalRow } from './row/main';
import { HomePersonalRowWrapper } from './wrapper/main';

export function HomePersonalTableGrid({ spaces }: { spaces: SpaceObj[] }) {
  return (
    <div className='w-full py-[1rem]'>
      {spaces?.map((space, index) => (
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
