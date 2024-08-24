import { PipIndicator } from '@/(components)/(indicator)/pip/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { ContextForSpaceMain } from '@/(server)/(controller)/space/main';
import { useContext } from 'react';
import { ContextForSpaceMapController } from '../../../(controller)/map/main';
import { ContextForSpaceMapSidebar, SpaceMapSidebarMode } from '../../../page';
import { SpaceMapCursorIcon } from './tools/cursor/main';

export function SpaceMapHeaderLeft() {
  const mapController = useContext(ContextForSpaceMapController);
  const galleryController = useContext(ContextForGalleryList);
  const spaceController = useContext(ContextForSpaceMain);
  const sidebarController = useContext(ContextForSpaceMapSidebar);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <SpaceMapCursorIcon
        className={
          mapController.selected === null ? 'fill-slate-300' : 'fill-blue-500'
        }
      />
      <PipIndicator />
      {sidebarController.mode === SpaceMapSidebarMode.Home ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 -960 960 960'
          width='24px'
          className='fill-slate-300'
          onClick={() => {
            sidebarController.actions.goToGallery(
              galleryController.actions.stateActions.find(
                spaceController.state.obj.galleryId,
              ),
            );
          }}
        >
          <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 -960 960 960'
          width='24px'
          className='fill-slate-300'
          onClick={() => {
            sidebarController.actions.goToHome();
          }}
        >
          <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z' />
        </svg>
      )}
    </div>
  );
}
