import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { AstralBubbleIcon } from '@/icons/bubble/main';
import { AstralCursorIcon } from '@/icons/cursor/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { AstralListIcon } from '@/icons/list/main';
import { AstralPersonIcon } from '@/icons/person/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { AstralSortIcon } from '@/icons/sort/main';
import { PipIndicator } from '@/ui/indicator/pip/main';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapConnectionMode,
  SpaceMapPeopleMode,
  SpaceMapSidebarContentMode,
} from '../../../../../controller/map/main';

export function SpaceMapHeaderLeft() {
  const {
    state: {
      selectedIdeas,
      peopleMode,
      connectionMode,
      sidebarContentMode: sidebarMode,
    },
    actions: {
      updatePeopleMode,
      updateConnectionMode,
      updateSidebarMode,
      autoSort,
    },
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
          sidebarMode === SpaceMapSidebarContentMode.MEDIA
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (sidebarMode === SpaceMapSidebarContentMode.LIST) {
            updateSidebarMode(SpaceMapSidebarContentMode.MEDIA);
          } else {
            updateSidebarMode(SpaceMapSidebarContentMode.LIST);
          }
        }}
      />
      <AstralFolderIcon
        className={
          sidebarMode === SpaceMapSidebarContentMode.LIST
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (sidebarMode === SpaceMapSidebarContentMode.MEDIA) {
            updateSidebarMode(SpaceMapSidebarContentMode.LIST);
          } else {
            updateSidebarMode(SpaceMapSidebarContentMode.MEDIA);
          }
        }}
      />
      <PipIndicator />
      <AstralSortIcon className='fill-slate-300' onClick={() => autoSort()} />
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
