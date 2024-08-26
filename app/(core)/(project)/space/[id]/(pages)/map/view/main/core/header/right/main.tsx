import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { SpaceMapPrioritiseModal } from '../../../../../(modal)/prioritise/main';
import { SpaceMapPrioritiseIcon } from '../left/tools/save/main';

export function SpaceMapHeaderRight() {
  const openableController = useControllerForOpenable();

  return (
    <div className='flex w-1/3 flex-row justify-end space-x-[1rem]'>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceMapPrioritiseModal />
      </ContextForOpenable.Provider>
      <SpaceMapPrioritiseIcon
        onClick={() => {
          openableController.open();
        }}
      />
    </div>
  );
}
