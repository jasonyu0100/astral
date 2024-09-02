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
  const {
    state: { selectedIdeas, peopleMode, connectionMode, sidebarMode },
    actions: { updatePeopleMode, updateConnectionMode, updateSidebarMode },
  } = useContext(ContextForSpaceMap);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralCursorIcon
        className={
          selectedIdeas.length === 0 ? 'fill-slate-300' : 'fill-blue-500'
        }
      />
      <AstralPersonIcon
        className={
          peopleMode === SpaceMapPeopleMode.OFF
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (peopleMode === SpaceMapPeopleMode.OFF) {
            updatePeopleMode(SpaceMapPeopleMode.ON);
          } else {
            updatePeopleMode(SpaceMapPeopleMode.OFF);
          }
        }}
      />
      <AstralBubbleIcon
        className={
          connectionMode === SpaceMapConnectionMode.DEFAULT
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (connectionMode === SpaceMapConnectionMode.DEFAULT) {
            updateConnectionMode(SpaceMapConnectionMode.BUBBLE);
          } else {
            updateConnectionMode(SpaceMapConnectionMode.DEFAULT);
          }
        }}
      />
      <PipIndicator />
      <AstralListIcon
        className={
          sidebarMode === SpaceMapSidebarMode.MEDIA
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (sidebarMode === SpaceMapSidebarMode.LIST) {
            updateSidebarMode(SpaceMapSidebarMode.MEDIA);
          } else {
            updateSidebarMode(SpaceMapSidebarMode.LIST);
          }
        }}
      />
      <AstralFolderIcon
        className={
          sidebarMode === SpaceMapSidebarMode.LIST
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (sidebarMode === SpaceMapSidebarMode.MEDIA) {
            updateSidebarMode(SpaceMapSidebarMode.LIST);
          } else {
            updateSidebarMode(SpaceMapSidebarMode.MEDIA);
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
