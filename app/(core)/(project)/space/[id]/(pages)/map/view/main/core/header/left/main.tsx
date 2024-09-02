import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { AstralBubbleIcon } from '@/icons/bubble/main';
import { AstralCursorIcon } from '@/icons/cursor/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { AstralListIcon } from '@/icons/list/main';
import { AstralPersonIcon } from '@/icons/person/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { PipIndicator } from '@/ui/indicator/pip/main';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapConnectionMode,
  SpaceMapPeopleMode,
  SpaceMapSidebarMode,
} from '../../../../../controller/map/main';

export function SpaceMapHeaderLeft() {
  const mapController = useContext(ContextForSpaceMap);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralCursorIcon
        className={
          mapController.selectedIdeas.length === 0
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
      />
      <AstralPersonIcon
        className={
          mapController.peopleMode === SpaceMapPeopleMode.OFF
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (mapController.peopleMode === SpaceMapPeopleMode.OFF) {
            mapController.updatePeopleMode(SpaceMapPeopleMode.ON);
          } else {
            mapController.updatePeopleMode(SpaceMapPeopleMode.OFF);
          }
        }}
      />
      <AstralBubbleIcon
        className={
          mapController.connectionMode === SpaceMapConnectionMode.DEFAULT
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (mapController.connectionMode === SpaceMapConnectionMode.DEFAULT) {
            mapController.updateConnectionMode(SpaceMapConnectionMode.BUBBLE);
          } else {
            mapController.updateConnectionMode(SpaceMapConnectionMode.DEFAULT);
          }
        }}
      />
      <PipIndicator />
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
      <AstralFolderIcon
        className={
          mapController.sidebarMode === SpaceMapSidebarMode.LIST
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (mapController.sidebarMode === SpaceMapSidebarMode.MEDIA) {
            mapController.updateSidebarMode(SpaceMapSidebarMode.LIST);
          } else {
            mapController.updateSidebarMode(SpaceMapSidebarMode.MEDIA);
          }
        }}
      />
      <PipIndicator />
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
