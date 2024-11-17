import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { useContext } from 'react';
import { HomeCreateFlowContainer } from './container/main';
import { HomeCreateTableGrid } from './grid/main';
import { HomeCreateTableMainMixedGrid } from './starred/main';

export function HomeCreateTableMain() {
  const spacesListController = useContext(ContextForSpaceList);
  const spacesList = spacesListController.state.objs;
  const unstarredSpaces = spacesList.filter((space) => !space.starred);
  const starredSpaces = spacesList.filter((space) => space.starred);

  return (
    <>
      <HomeCreateFlowContainer>
        {/* <HomeCreateTableHeader /> */}
        <div className='flex flex-col px-[1rem] pb-[1rem]'>
          {starredSpaces.length > 0 ? (
            <HomeCreateTableMainMixedGrid />
          ) : (
            <HomeCreateTableGrid spaces={unstarredSpaces} />
          )}
        </div>
      </HomeCreateFlowContainer>
    </>
  );
}
