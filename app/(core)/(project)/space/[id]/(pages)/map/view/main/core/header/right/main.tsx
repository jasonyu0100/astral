import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../(modal)/controller/main';
import { SpaceMapPrioritiseIcon } from '../left/tools/save/main';

export function SpaceMapHeaderRight() {
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <div className='flex w-1/3 flex-row justify-end space-x-[1rem]'>
      <SpaceMapPrioritiseIcon
        onClick={() => {
          modalController.prioritiseController.open();
        }}
      />
    </div>
  );
}
