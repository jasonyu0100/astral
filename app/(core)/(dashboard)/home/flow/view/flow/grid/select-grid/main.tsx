import { ContextForSpaceObj, SpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { HomeFlowRowWrapper } from '../wrapper/main';
import { HomeFlowInactiveSelectRow } from './row/main';

export function HomeFlowTableSelectGrid({ spaces }: { spaces: SpaceObj[] }) {
  return (
    <div className='w-full'>
      {spaces?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <HomeFlowRowWrapper key={space.id}>
              <HomeFlowInactiveSelectRow />
            </HomeFlowRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
