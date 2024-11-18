import { ContextForSpaceObj, SpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { HomeCampaignRowWrapper } from '../wrapper/main';
import { HomeCampaignActiveFlowRow } from './row/main';

export function HomeCampaignTableGridFlow({ spaces }: { spaces: SpaceObj[] }) {
  return (
    <div className='w-full'>
      {spaces?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <HomeCampaignRowWrapper key={space.id}>
              <HomeCampaignActiveFlowRow />
            </HomeCampaignRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
