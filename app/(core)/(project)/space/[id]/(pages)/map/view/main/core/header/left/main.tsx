import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { AstralBubbleIcon } from '@/icons/bubble/main';
import { AstralCursorIcon } from '@/icons/cursor/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { AstralInfoIcon } from '@/icons/info/main';
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
  SpaceMapStatusMode,
} from '../../../../../controller/map/main';

export function SpaceMapHeaderLeft() {
  const {
    state: {
      directoryMode,
      selectedIdeas,
      peopleMode,
      connectionMode,
      sidebarContentMode: sidebarContentMode,
      statusMode: statusMode,
    },
    actions: {
      updateDirectoryMode,
      updatePeopleMode,
      updateConnectionMode,
      updateSidebarMode,
      autoSort,
      updateStatusMode,
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
      <AstralInfoIcon
        className={
          statusMode === SpaceMapStatusMode.ON
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() =>
          updateStatusMode(
            statusMode === SpaceMapStatusMode.ON
              ? SpaceMapStatusMode.OFF
              : SpaceMapStatusMode.ON,
          )
        }
      />
      <PipIndicator />
      <AstralListIcon
        className={
          sidebarContentMode === SpaceMapSidebarContentMode.MEDIA
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (sidebarContentMode === SpaceMapSidebarContentMode.LIST) {
            updateSidebarMode(SpaceMapSidebarContentMode.MEDIA);
          } else {
            updateSidebarMode(SpaceMapSidebarContentMode.LIST);
          }
        }}
      />
      <AstralFolderIcon
        className={
          sidebarContentMode === SpaceMapSidebarContentMode.LIST
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (sidebarContentMode === SpaceMapSidebarContentMode.MEDIA) {
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
