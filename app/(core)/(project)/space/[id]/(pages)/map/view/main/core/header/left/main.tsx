import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { AstralBubbleIcon } from '@/icons/bubble/main';
import { AstralCursorIcon } from '@/icons/cursor/main';
import { AstralFullscreenIcon } from '@/icons/fullscreen/main';
import { AstralPersonIcon } from '@/icons/person/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { AstralSearchIcon } from '@/icons/search/main';
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
      sidebarContentMode: sidebarContentMode,
    },
    actions: {
      updatePeopleMode,
      updateConnectionMode,
      updateSidebarContentMode: updateSidebarMode,
      autoSort,
      selectAll,
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
      <AstralSortIcon className='fill-slate-300' onClick={() => autoSort()} />
      <AstralFullscreenIcon
        onClick={() => selectAll()}
        className={
          selectedIdeas.length >= ideaListController.state.objs.length &&
          selectedIdeas.length > 0
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
      />
      <PipIndicator />
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
      {/* <AstralListIcon
        className={
          sidebarContentMode === SpaceMapSidebarContentMode.LIST
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (sidebarContentMode === SpaceMapSidebarContentMode.LIST) {
            updateSidebarMode(SpaceMapSidebarContentMode.MEDIA);
          } else {
            updateSidebarMode(SpaceMapSidebarContentMode.LIST);
          }
        }}
      /> */}
      <AstralSearchIcon
        className={
          sidebarContentMode === SpaceMapSidebarContentMode.SEARCH
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (sidebarContentMode === SpaceMapSidebarContentMode.SEARCH) {
            updateSidebarMode(SpaceMapSidebarContentMode.MEDIA);
          } else {
            updateSidebarMode(SpaceMapSidebarContentMode.SEARCH);
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
