import { ContextForSpaceObj, SpaceObj } from '@/architecture/model/space/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { HomeCreateRow } from './row/main';
import { HomeCreateRowWrapper } from './wrapper/main';

export function HomeCreateTableGrid({ spaces }: { spaces: SpaceObj[] }) {
  return (
    <div className='w-full py-[1rem]'>
      {spaces?.map((space, index) => (
        <ContextForSpaceObj.Provider value={space} key={space.id}>
          <ContextForIndexable.Provider value={index}>
            <HomeCreateRowWrapper key={space.id}>
              <HomeCreateRow />
            </HomeCreateRowWrapper>
          </ContextForIndexable.Provider>
        </ContextForSpaceObj.Provider>
      ))}
    </div>
  );
}
