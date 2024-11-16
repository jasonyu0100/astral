import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { useContext } from 'react';
import { CreateSpacesFlowContainer } from './container/main';
import { CreateSpacesTableGrid } from './grid/main';
import { CreateSpacesTableHeader } from './header/main';
import { CreateSpacesTableMainMixedGrid } from './starred/main';

export function CreateSpacesTableMain() {
  const spacesListController = useContext(ContextForSpaceList);
  const spacesList = spacesListController.state.objs;
  const unstarredSpaces = spacesList.filter((space) => !space.starred);
  const starredSpaces = spacesList.filter((space) => space.starred);

  return (
    <>
      <CreateSpacesFlowContainer>
        <CreateSpacesTableHeader />
        <div className='flex flex-col px-[1rem] pb-[1rem]'>
          {starredSpaces.length > 0 ? (
            <CreateSpacesTableMainMixedGrid />
          ) : (
            <CreateSpacesTableGrid spaces={unstarredSpaces} />
          )}
        </div>
      </CreateSpacesFlowContainer>
    </>
  );
}
