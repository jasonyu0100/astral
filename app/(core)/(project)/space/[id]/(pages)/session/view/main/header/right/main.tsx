import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { SpaceSessionSpotlightModal } from '../../../../modal/synthesise/main';

export function SpaceSessionHeaderRight() {
  const openableController = useControllerForOpenable();

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceSessionSpotlightModal />
      </ContextForOpenable.Provider>
      <button
        className='flex flex-row items-center space-x-[1rem] rounded-md bg-blue-500 px-[1rem] py-[0.5rem]'
        onClick={() => {
          openableController.open();
        }}
      >
        <p className='font-bold text-slate-300'>Spotlight</p>
        <AstralArrowForwardIcon />
      </button>
    </div>
  );
}
