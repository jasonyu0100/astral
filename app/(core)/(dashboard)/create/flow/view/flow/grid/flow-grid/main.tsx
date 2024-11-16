import { ContextForSpaceObj, SpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { CreateFlowRowWrapper } from '../wrapper/main';
import { CreateFlowActiveFlowRow } from './row/main';

export function CreateFlowTableGridFlow({ spaces }: { spaces: SpaceObj[] }) {
  return (
    <div className='w-full'>
      {spaces?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <CreateFlowRowWrapper key={space.id}>
              <CreateFlowActiveFlowRow />
            </CreateFlowRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
