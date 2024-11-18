import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext, useState } from 'react';
import { HomeProjectsTableGrid } from '../grid/main';

export function HomeProjectsTableMainMixedGrid() {
  const spacesListController = useContext(ContextForSpaceList);
  const spacesList = spacesListController.state.objs;
  const unstarredSpaces = spacesList.filter((space) => !space.starred);
  const starredSpaces = spacesList.filter((space) => space.starred);
  const [showStarred, setShowStarred] = useState(true);
  const [showUnstarred, setShowUnstarred] = useState(true);

  return (
    <>
      {showStarred && <HomeProjectsTableGrid spaces={starredSpaces} />}
      {showUnstarred && (
        <>
          <HorizontalDivider />
          <HomeProjectsTableGrid spaces={unstarredSpaces} />
        </>
      )}
    </>
  );
}
