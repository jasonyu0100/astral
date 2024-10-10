import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { AstralBubbleIcon } from '@/icons/bubble/main';
import { AstralCursorIcon } from '@/icons/cursor/main';
import { AstralFullscreenIcon } from '@/icons/fullscreen/main';
import { AstralPersonIcon } from '@/icons/person/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { AstralSearchIcon } from '@/icons/search/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralSortIcon } from '@/icons/sort/main';
import { BarDividerIndicator } from '@/ui/indicator/bar/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapConnectionMode,
  SpacesMapPeopleMode,
  SpacesMapSidebarContentMode,
  SpacesMapSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesMapHeaderLeft() {
  const {
    state: {
      sidebarVisibility,
      selectedIdeas,
      peopleMode,
      connectionMode,
      sidebarContentMode: sidebarContentMode,
    },
    actions: {
      updatePeopleMode,
      updateConnectionMode,
      updateSidebarContentMode: updateSidebarMode,
      updateSidebarVisibility,
      autoSort,
      selectAll,
    },
  } = useContext(ContextForSpacesMap);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesMapSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesMapSidebarVisibility.CLOSED
              ? SpacesMapSidebarVisibility.OPEN
              : SpacesMapSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
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
      <AstralPersonIcon
        className={
          peopleMode === SpacesMapPeopleMode.OFF
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (peopleMode === SpacesMapPeopleMode.OFF) {
            updatePeopleMode(SpacesMapPeopleMode.ON);
          } else {
            updatePeopleMode(SpacesMapPeopleMode.OFF);
          }
        }}
      />
      <AstralBubbleIcon
        className={
          connectionMode === SpacesMapConnectionMode.DEFAULT
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (connectionMode === SpacesMapConnectionMode.DEFAULT) {
            updateConnectionMode(SpacesMapConnectionMode.BUBBLE);
          } else {
            updateConnectionMode(SpacesMapConnectionMode.DEFAULT);
          }
        }}
      />
      {/* <AstralListIcon
        className={
          sidebarContentMode === SpacesMapSidebarContentMode.LIST
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (sidebarContentMode === SpacesMapSidebarContentMode.LIST) {
            updateSidebarMode(SpacesMapSidebarContentMode.MEDIA);
          } else {
            updateSidebarMode(SpacesMapSidebarContentMode.LIST);
          }
        }}
      /> */}
      <AstralSearchIcon
        className={
          sidebarContentMode === SpacesMapSidebarContentMode.SEARCH
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (sidebarContentMode === SpacesMapSidebarContentMode.SEARCH) {
            updateSidebarMode(SpacesMapSidebarContentMode.MEDIA);
          } else {
            updateSidebarMode(SpacesMapSidebarContentMode.SEARCH);
          }
        }}
      />
      <BarDividerIndicator />
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
