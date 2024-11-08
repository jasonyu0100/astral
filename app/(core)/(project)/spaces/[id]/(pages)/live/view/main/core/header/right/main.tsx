import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { useContext } from 'react';
import { ContextForSpacesLive } from '../../../../../controller/main';

export function SpacesLiveHeaderRight() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const spacesLiveController = useContext(ContextForSpacesLive);

  return (
    <div className='flex w-1/3 flex-row justify-end space-x-[1rem]'>
      {/* {spacesLiveController.state.selectedPosts.length > 0 ? (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            alert('coming soon...');
          }}
        >
          <p className='font-bold text-slate-300'>
            Summarise Posts ({spacesLiveController.state.selectedPosts.length})
          </p>
          <AstralArticleIcon />
        </button>
      ) : (
        <p className='animate-pulse font-bold text-slate-400'>
          No posts selected
        </p>
      )} */}
    </div>
  );
}
