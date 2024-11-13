import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { ContextForHomePersonal } from '../../controller/main';
import { HomePersonalFlowContainer } from './container/main';
import { HomePersonalTableGrid } from './grid/main';

export function HomePersonalTableMain() {
  const homePersonalController = useContext(ContextForHomePersonal);
  const spacesListController = useContext(ContextForSpaceList);
  const spacesList = spacesListController.state.objs;
  const unstarredSpaces = spacesList.filter((space) => !space.starred);
  const starredSpaces = spacesList.filter((space) => space.starred);

  return (
    <>
      <HomePersonalFlowContainer>
        {starredSpaces.length > 0 && (
          <>
            <HomePersonalTableGrid spaces={starredSpaces} />
            <HorizontalDivider />
          </>
        )}
        <HomePersonalTableGrid spaces={unstarredSpaces} />
      </HomePersonalFlowContainer>
    </>
  );
}
