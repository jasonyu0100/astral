import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { useContext } from 'react';
import { HomeProjectsTableContainer } from './container/main';
import { HomeProjectsTableGrid } from './grid/main';
import { HomeProjectsTableMainMixedGrid } from './starred/main';

export function HomeProjectsTableMain() {
  const spacesListController = useContext(ContextForSpaceList);
  const spacesList = spacesListController.state.objs;
  const unstarredSpaces = spacesList.filter((space) => !space.starred);
  const starredSpaces = spacesList.filter((space) => space.starred);

  return (
    <>
      <HomeProjectsTableContainer>
        {/* <HomeProjectsTableHeader /> */}
        <div className='flex flex-col px-[1rem] pb-[1rem]'>
          {starredSpaces.length > 0 ? (
            <HomeProjectsTableMainMixedGrid />
          ) : (
            <HomeProjectsTableGrid spaces={unstarredSpaces} />
          )}
        </div>
      </HomeProjectsTableContainer>
    </>
  );
}
