import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
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
        <div className='flex flex-col px-[1rem] pb-[1rem]'>
          {starredSpaces.length > 0 && (
            <>
              <div className='flex w-full items-center justify-between p-[1rem]'>
                <p className='text-sm font-bold text-slate-400'>Starred</p>
                <AstralChevronDownIcon />
              </div>
              <HorizontalDivider />
              <HomePersonalTableGrid spaces={starredSpaces} />
              <div className='flex w-full items-center justify-between p-[1rem]'>
                <p className='text-sm font-bold text-slate-400'>General</p>
                <AstralChevronDownIcon />
              </div>
              <HorizontalDivider />
            </>
          )}
          <HomePersonalTableGrid spaces={unstarredSpaces} />
          <HorizontalDivider />
        </div>
      </HomePersonalFlowContainer>
    </>
  );
}
