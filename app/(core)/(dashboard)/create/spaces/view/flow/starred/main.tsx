import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext, useState } from 'react';
import { CreateSpacesTableGrid } from '../grid/main';

export function CreateSpacesTableMainMixedGrid() {
  const spacesListController = useContext(ContextForSpaceList);
  const spacesList = spacesListController.state.objs;
  const unstarredSpaces = spacesList.filter((space) => !space.starred);
  const starredSpaces = spacesList.filter((space) => space.starred);
  const [showStarred, setShowStarred] = useState(true);
  const [showUnstarred, setShowUnstarred] = useState(true);

  return (
    <>
      {showStarred && <CreateSpacesTableGrid spaces={starredSpaces} />}
      {showUnstarred && (
        <>
          <HorizontalDivider />
          <CreateSpacesTableGrid spaces={unstarredSpaces} />
        </>
      )}
    </>
  );
}
