import { ContextForSpaceMain } from '@/server/controller/space/main';
import { useContext } from 'react';

export function SpacesPreviewHeaderRight() {
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <div className='flex w-1/3 flex-row justify-end space-x-[1rem]'>
      {/* <button
        className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
        onClick={() => {
          window.open(
            publicSpaceMap.space.link(spaceMainController.state.objId),
          );
        }}
      >
        <p className='font-bold text-slate-300'>View Live</p>
        <AstralLinkIcon />
      </button> */}
    </div>
  );
}
