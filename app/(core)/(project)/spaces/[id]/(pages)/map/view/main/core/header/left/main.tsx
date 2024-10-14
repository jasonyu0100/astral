import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { AstralBubbleIcon } from '@/icons/bubble/main';
import { AstralDownloadIcon } from '@/icons/download/main';
import { AstralFullscreenIcon } from '@/icons/fullscreen/main';
import { AstralManageSearchIcon } from '@/icons/manage-search/main';
import { AstralPersonIcon } from '@/icons/person/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralSortIcon } from '@/icons/sort/main';
import { BarDividerIndicator } from '@/ui/indicator/bar/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapConnectionMode,
  SpacesMapPeopleMode,
  SpacesMapSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesMapModals } from '../../../../../modal/controller/main';

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
  const modalController = useContext(ContextForSpacesMapModals);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={cn({
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
      <AstralBubbleIcon
        className={
          connectionMode === SpacesMapConnectionMode.DEFAULT
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (connectionMode === SpacesMapConnectionMode.DEFAULT) {
            updateConnectionMode(SpacesMapConnectionMode.BUBBLE);
          } else {
            updateConnectionMode(SpacesMapConnectionMode.DEFAULT);
          }
        }}
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
      <BarDividerIndicator />
      <AstralManageSearchIcon
        onClick={() => {
          modalController.addSearchIdeaController.open();
        }}
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
      <AstralDownloadIcon />
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
