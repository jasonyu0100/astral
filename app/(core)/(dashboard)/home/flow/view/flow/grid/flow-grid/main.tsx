import { ContextForSpaceObj, SpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { HomeFlowRowWrapper } from '../wrapper/main';
import { HomeFlowActiveFlowRow } from './row/main';

export function HomeFlowTableGridFlow({ spaces }: { spaces: SpaceObj[] }) {
  return (
    <div className='w-full'>
      {spaces?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <HomeFlowRowWrapper key={space.id}>
              <HomeFlowActiveFlowRow />
            </HomeFlowRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
