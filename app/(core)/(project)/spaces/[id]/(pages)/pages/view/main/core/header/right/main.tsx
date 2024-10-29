import { AstralLinkIcon } from '@/icons/link/main';
import { useContext } from 'react';
import { ContextForSpacesPagesModals } from '../../../../../modal/controller/main';

export function SpacesPagesHeaderRight() {
  const spacesPostModalController = useContext(ContextForSpacesPagesModals);
  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <button
        className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
        onClick={() => {
          spacesPostModalController.shareReviewController.open();
        }}
      >
        <p className='font-bold text-slate-300'>Share Page</p>
        <AstralLinkIcon />
      </button>
    </div>
  );
}
