import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { useContext } from 'react';
import { HomePersonalFlowContainer } from './container/main';
import { HomePersonalTableGrid } from './grid/main';
import { HomePersonalTableHeader } from './header/main';
import { HomePersonalTableMainMixedGrid } from './starred/main';

export function HomePersonalTableMain() {
  const spacesListController = useContext(ContextForSpaceList);
  const spacesList = spacesListController.state.objs;
  const unstarredSpaces = spacesList.filter((space) => !space.starred);
  const starredSpaces = spacesList.filter((space) => space.starred);

  return (
    <>
      <HomePersonalFlowContainer>
        <HomePersonalTableHeader />
        <div className='flex flex-col px-[1rem] pb-[1rem]'>
          {starredSpaces.length > 0 ? (
            <HomePersonalTableMainMixedGrid />
          ) : (
            <HomePersonalTableGrid spaces={unstarredSpaces} />
          )}
        </div>
      </HomePersonalFlowContainer>
    </>
  );
}
