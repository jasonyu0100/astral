import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { useContext, useState } from 'react';
import { HomePersonalTableGrid } from '../grid/main';

export function HomePersonalTableMainStarredUnstarred() {
  const spacesListController = useContext(ContextForSpaceList);
  const spacesList = spacesListController.state.objs;
  const unstarredSpaces = spacesList.filter((space) => !space.starred);
  const starredSpaces = spacesList.filter((space) => space.starred);
  const [showStarred, setShowStarred] = useState(true);
  const [showUnstarred, setShowUnstarred] = useState(true);

  return (
    <>
      <div
        className='flex w-full cursor-pointer items-center justify-between border-b border-slate-300 border-opacity-30 p-[1rem]'
        onClick={() => setShowStarred(!showStarred)}
      >
        <p className='text-sm font-bold text-slate-400'>Starred</p>
        {showStarred ? <AstralChevronDownIcon /> : <AstralChevronUpIcon />}
      </div>
      {showStarred && <HomePersonalTableGrid spaces={starredSpaces} />}
      <div
        className='flex w-full cursor-pointer items-center justify-between border-b border-slate-300 border-opacity-30 p-[1rem]'
        onClick={() => setShowUnstarred(!showUnstarred)}
      >
        <p className='text-sm font-bold text-slate-400'>General</p>
        {showUnstarred ? <AstralChevronDownIcon /> : <AstralChevronUpIcon />}
      </div>
      {showUnstarred && <HomePersonalTableGrid spaces={unstarredSpaces} />}
    </>
  );
}
