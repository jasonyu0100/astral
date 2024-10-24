import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralBubbleIcon } from '@/icons/bubble/main';
import { AstralCalendarIcon } from '@/icons/calendar/main';
import { AstralDownloadIcon } from '@/icons/download/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { AstralFullscreenIcon } from '@/icons/fullscreen/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralSortIcon } from '@/icons/sort/main';
import { AstralSyncAltIcon } from '@/icons/sync-alt/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapBubbleMode,
  SpacesMapLinkMode,
  SpacesMapSidebarContentMode,
  SpacesMapSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesMapHeaderLeft() {
  const {
    state: {
      sidebarVisibility,
      selectedIdeas,
      linkMode: connectionMode,
      bubbleMode: peopleMode,
    },
    actions: {
      updateSidebarContentMode,
      updateLinkMode: updateConnectionMode,
      updateBubbleMode: updatePeopleMode,
      goToGallery,
      updateSidebarVisibility,
      autoSort,
      selectAll,
    },
  } = useContext(ContextForSpacesMap);
  const user = useGlobalUser((state) => state.user);
  const space = useContext(ContextForSpaceMain);
  const galleryController = useContext(ContextForGalleryList);
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
      <AstralCalendarIcon
        onClick={() => {
          goToGallery(
            galleryController.actions.stateActions.find(user.journalId),
          );
          updateSidebarContentMode(SpacesMapSidebarContentMode.EXPLORER);
        }}
      />
      <AstralFolderIcon
        onClick={() => {
          goToGallery(
            galleryController.actions.stateActions.find(
              space.state.obj.galleryId,
            ),
          );
          updateSidebarContentMode(SpacesMapSidebarContentMode.EXPLORER);
        }}
      />
      <BarDividerIndicator />
      <AstralSyncAltIcon
        className={
          connectionMode === SpacesMapLinkMode.ON
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (connectionMode === SpacesMapLinkMode.ON) {
            updateConnectionMode(SpacesMapLinkMode.OFF);
          } else {
            updateConnectionMode(SpacesMapLinkMode.ON);
          }
        }}
      />
      <AstralBubbleIcon
        className={
          peopleMode === SpacesMapBubbleMode.OFF
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (peopleMode === SpacesMapBubbleMode.OFF) {
            updatePeopleMode(SpacesMapBubbleMode.ON);
          } else {
            updatePeopleMode(SpacesMapBubbleMode.OFF);
          }
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
      <BarDividerIndicator />
      <AstralDownloadIcon
        onClick={() => {
          alert('Coming Soon...');
        }}
      />
      <AstralSaveIcon
        onClick={() => {
          ideaListController.actions.editActions.sync().then(() => {
            alert('save all');
          });
        }}
      />{' '}
      <BarDividerIndicator />
    </div>
  );
}
