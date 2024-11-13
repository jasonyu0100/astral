import { ContextForSpaceObj, SpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { FlowCurrentRow } from './row/main';
import { FlowCurrentRowWrapper } from './wrapper/main';

export function FlowCurrentTableGrid({ spaces }: { spaces: SpaceObj[] }) {
  return (
    <div className='w-full'>
      {spaces?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <FlowCurrentRowWrapper key={space.id}>
              <FlowCurrentRow />
            </FlowCurrentRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
