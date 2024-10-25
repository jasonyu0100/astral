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
  ContextForSpacesView,
  SpacesViewBubbleMode,
  SpacesViewLinkMode,
  SpacesViewSidebarContentMode,
  SpacesViewSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesViewHeaderLeft() {
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
  } = useContext(ContextForSpacesView);
  const user = useGlobalUser((state) => state.user);
  const space = useContext(ContextForSpaceMain);
  const galleryController = useContext(ContextForGalleryList);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesViewSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesViewSidebarVisibility.CLOSED
              ? SpacesViewSidebarVisibility.OPEN
              : SpacesViewSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralCalendarIcon
        onClick={() => {
          goToGallery(
            galleryController.actions.stateActions.find(user.journalId),
          );
          updateSidebarContentMode(SpacesViewSidebarContentMode.EXPLORER);
        }}
      />
      <AstralFolderIcon
        onClick={() => {
          goToGallery(
            galleryController.actions.stateActions.find(
              space.state.obj.galleryId,
            ),
          );
          updateSidebarContentMode(SpacesViewSidebarContentMode.EXPLORER);
        }}
      />
      <BarDividerIndicator />
      <AstralSyncAltIcon
        className={
          connectionMode === SpacesViewLinkMode.ON
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (connectionMode === SpacesViewLinkMode.ON) {
            updateConnectionMode(SpacesViewLinkMode.OFF);
          } else {
            updateConnectionMode(SpacesViewLinkMode.ON);
          }
        }}
      />
      <AstralBubbleIcon
        className={
          peopleMode === SpacesViewBubbleMode.OFF
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (peopleMode === SpacesViewBubbleMode.OFF) {
            updatePeopleMode(SpacesViewBubbleMode.ON);
          } else {
            updatePeopleMode(SpacesViewBubbleMode.OFF);
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
