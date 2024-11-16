import { ContextForSpaceObj, SpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { CreateFlowRowWrapper } from '../wrapper/main';
import { CreateFlowInactiveSelectRow } from './row/main';

export function CreateFlowTableSelectGrid({ spaces }: { spaces: SpaceObj[] }) {
  return (
    <div className='w-full'>
      {spaces?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <CreateFlowRowWrapper key={space.id}>
              <CreateFlowInactiveSelectRow />
            </CreateFlowRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
