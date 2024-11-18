import { ContextForSpaceObj, SpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { HomeProjectsRow } from './row/main';
import { HomeProjectsRowWrapper } from './wrapper/main';

export function HomeProjectsTableGrid({ spaces }: { spaces: SpaceObj[] }) {
  return (
    <div className='w-full py-[1rem]'>
      {spaces?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <HomeProjectsRowWrapper key={space.id}>
              <HomeProjectsRow />
            </HomeProjectsRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
