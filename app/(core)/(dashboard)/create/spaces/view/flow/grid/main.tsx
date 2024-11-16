import { ContextForSpaceObj, SpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { CreateSpacesRow } from './row/main';
import { CreateSpacesRowWrapper } from './wrapper/main';

export function CreateSpacesTableGrid({ spaces }: { spaces: SpaceObj[] }) {
  return (
    <div className='w-full py-[1rem]'>
      {spaces?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <CreateSpacesRowWrapper key={space.id}>
              <CreateSpacesRow />
            </CreateSpacesRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
