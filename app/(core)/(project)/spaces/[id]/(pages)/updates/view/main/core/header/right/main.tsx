import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { AstralLinkIcon } from '@/icons/link/main';
import Link from 'next/link';
import { useContext } from 'react';

export function SpacesPostsHeaderRight() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex w-1/3 flex-row justify-end space-x-[1rem]'>
      <Link
        href={`${liveMap.live.link(spaceMainController.state.objId)}?chapter=${chapterListController.state.objId}`}
      >
        <button className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'>
          <p className='font-bold text-slate-300'>View Live</p>
          <AstralLinkIcon />
        </button>
      </Link>
    </div>
  );
}
