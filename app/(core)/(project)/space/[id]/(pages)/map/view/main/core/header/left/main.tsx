import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { AstralCursorIcon } from '@/icons/cursor/main';
import { AstralFolderOpenIcon } from '@/icons/folder-open/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { AstralListIcon } from '@/icons/list/main';
import { AstralNoteIcon } from '@/icons/note/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { PipIndicator } from '@/ui/(indicator)/pip/main';
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

export function SpaceMapHeaderLeft() {
  const mapController = useContext(ContextForSpaceMap);
  const galleryController = useContext(ContextForGalleryList);
  const spaceController = useContext(ContextForSpaceMain);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sidebarController = useContext(ContextForSpaceMapSidebar);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralCursorIcon
        className={
          mapController.selectedIdea === null
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
      />
      <AstralNoteIcon
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 -960 960 960'
        className={
          mapController.ideaMode === SpaceMapIdeaMode.VISUAL
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (mapController.ideaMode === SpaceMapIdeaMode.VISUAL) {
            mapController.updateIdeaMode(SpaceMapIdeaMode.DETAILS);
          } else {
            mapController.updateIdeaMode(SpaceMapIdeaMode.VISUAL);
          }
        }}
      />
      <AstralListIcon
        className={
          mapController.sidebarMode === SpaceMapSidebarMode.MEDIA
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (mapController.sidebarMode === SpaceMapSidebarMode.LIST) {
            mapController.updateSidebarMode(SpaceMapSidebarMode.MEDIA);
          } else {
            mapController.updateSidebarMode(SpaceMapSidebarMode.LIST);
          }
        }}
      />
      <PipIndicator />
      {sidebarController.mode === SpaceMapSidebarMediaMode.Home ? (
        <AstralFolderIcon
          onClick={() => {
            sidebarController.actions.goToGallery(
              galleryController.actions.stateActions.find(
                spaceController.state.obj.galleryId,
              ),
            );
            mapController.updateSidebarMode(SpaceMapSidebarMode.MEDIA);
          }}
        />
      ) : (
        <AstralFolderOpenIcon
          onClick={() => {
            sidebarController.actions.goToHome();
            mapController.updateSidebarMode(SpaceMapSidebarMode.MEDIA);
          }}
        />
      )}
      <AstralSaveIcon
        onClick={() => {
          ideaListController.actions.editActions.sync().then(() => {
            alert('save all');
          });
        }}
      />
    </div>
  );
}
