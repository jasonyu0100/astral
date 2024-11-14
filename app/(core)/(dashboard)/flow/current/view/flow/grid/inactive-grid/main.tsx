import { ContextForSpaceObj, SpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { FlowCurrentRowWrapper } from '../wrapper/main';
import { FlowCurrentInactiveFlowRow } from './row/main';

export function FlowCurrentTableGridInactiveFlow({
  spaces,
}: {
  spaces: SpaceObj[];
}) {
  return (
    <div className='w-full'>
      {spaces?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <FlowCurrentRowWrapper key={space.id}>
              <FlowCurrentInactiveFlowRow />
            </FlowCurrentRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
