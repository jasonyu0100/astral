import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { PipIndicator } from '@/ui/(indicator)/pip/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapIdeaMode,
  SpaceMapSidebarMode,
} from '../../../../../controller/map/main';
import {
  ContextForSpaceMapSidebar,
  SpaceMapSidebarMediaMode,
} from '../../../../../page';
import { SpaceMapCursorIcon } from './tools/cursor/main';

export function SpaceMapHeaderLeft() {
  const mapController = useContext(ContextForSpaceMap);
  const galleryController = useContext(ContextForGalleryList);
  const spaceController = useContext(ContextForSpaceMain);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sidebarController = useContext(ContextForSpaceMapSidebar);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <SpaceMapCursorIcon
        className={
          mapController.selectedIdea === null
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 -960 960 960'
        className={cn(
          'h-[1.5rem] w-[1.5rem] cursor-pointer',
          mapController.ideaMode === SpaceMapIdeaMode.VISUAL
            ? 'fill-slate-300'
            : 'fill-blue-500',
        )}
        onClick={() => {
          if (mapController.ideaMode === SpaceMapIdeaMode.VISUAL) {
            mapController.updateIdeaMode(SpaceMapIdeaMode.DETAILS);
          } else {
            mapController.updateIdeaMode(SpaceMapIdeaMode.VISUAL);
          }
        }}
      >
        <path d='M200-200h360v-200h200v-360H200v560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v400L600-120H200Zm80-280v-80h200v80H280Zm0-160v-80h400v80H280Zm-80 360v-560 560Z' />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 -960 960 960'
        width='24px'
        onClick={() => {
          if (mapController.sidebarMode === SpaceMapSidebarMode.LIST) {
            mapController.updateSidebarMode(SpaceMapSidebarMode.MEDIA);
          } else {
            mapController.updateSidebarMode(SpaceMapSidebarMode.LIST);
          }
        }}
        className={cn(
          'h-[1.5rem] w-[1.5rem] cursor-pointer',
          mapController.sidebarMode === SpaceMapSidebarMode.MEDIA
            ? 'fill-slate-300'
            : 'fill-blue-500',
        )}
      >
        <path d='M120-80v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80H120Zm0-280v-110q0-17 11.5-28.5T160-510h60v-30H120v-60h120q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z' />
      </svg>
      <PipIndicator />
      {sidebarController.mode === SpaceMapSidebarMediaMode.Home ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 -960 960 960'
          width='24px'
          className={cn('h-[1.5rem] w-[1.5rem] cursor-pointer fill-slate-300')}
          onClick={() => {
            sidebarController.actions.goToGallery(
              galleryController.actions.stateActions.find(
                spaceController.state.obj.galleryId,
              ),
            );
            mapController.updateSidebarMode(SpaceMapSidebarMode.MEDIA);
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
          className={cn('h-[1.5rem] w-[1.5rem] cursor-pointer fill-slate-300')}
          onClick={() => {
            sidebarController.actions.goToHome();
            mapController.updateSidebarMode(SpaceMapSidebarMode.MEDIA);
          }}
        >
          <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z' />
        </svg>
      )}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 -960 960 960'
        width='24px'
        className={cn('h-[1.5rem] w-[1.5rem] cursor-pointer fill-slate-300')}
        onClick={() => {
          ideaListController.actions.editActions.sync().then(() => {
            alert('save all');
          });
        }}
      >
        <path d='M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z' />
      </svg>
    </div>
  );
}
