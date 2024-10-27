import {
  ContextForSpacesView,
  SpacesViewBubbleMode,
  SpacesViewLinkMode,
  SpacesViewSidebarContentMode,
  SpacesViewSidebarVisibility,
} from '@/(core)/(project)/spaces/[id]/(pages)/view/controller/main';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralBubbleIcon } from '@/icons/bubble/main';
import { AstralCalendarIcon } from '@/icons/calendar/main';
import { AstralCameraIcon } from '@/icons/camera/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { AstralFullscreenIcon } from '@/icons/fullscreen/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralSortIcon } from '@/icons/sort/main';
import { AstralSyncAltIcon } from '@/icons/sync-alt/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForGalleryList } from '@/server/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForSpacesViewModals } from '../../../../../modal/controller/main';

export function SpacesViewHeaderLeft() {
  const spacesViewController = useContext(ContextForSpacesView);
  const spacesViewModalsController = useContext(ContextForSpacesViewModals);
  const user = useGlobalUser((state) => state.user);
  const space = useContext(ContextForSpaceMain);
  const galleryController = useContext(ContextForGalleryList);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            spacesViewController.state.sidebarVisibility ===
            SpacesViewSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          spacesViewController.actions.updateSidebarVisibility(
            spacesViewController.state.sidebarVisibility ===
              SpacesViewSidebarVisibility.CLOSED
              ? SpacesViewSidebarVisibility.OPEN
              : SpacesViewSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralCalendarIcon
        onClick={() => {
          spacesViewController.actions.goToGallery(
            galleryController.actions.stateActions.find(user.journalId),
          );
          spacesViewController.actions.updateSidebarContentMode(
            SpacesViewSidebarContentMode.EXPLORER,
          );
        }}
      />
      <AstralFolderIcon
        onClick={() => {
          spacesViewController.actions.goToGallery(
            galleryController.actions.stateActions.find(
              space.state.obj.galleryId,
            ),
          );
          spacesViewController.actions.updateSidebarContentMode(
            SpacesViewSidebarContentMode.EXPLORER,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralSyncAltIcon
        className={
          spacesViewController.state.linkMode === SpacesViewLinkMode.ON
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (spacesViewController.state.linkMode === SpacesViewLinkMode.ON) {
            spacesViewController.actions.updateLinkMode(SpacesViewLinkMode.OFF);
          } else {
            spacesViewController.actions.updateLinkMode(SpacesViewLinkMode.ON);
          }
        }}
      />
      <AstralBubbleIcon
        className={
          spacesViewController.state.bubbleMode === SpacesViewBubbleMode.OFF
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (
            spacesViewController.state.bubbleMode === SpacesViewBubbleMode.OFF
          ) {
            spacesViewController.actions.updateBubbleMode(
              SpacesViewBubbleMode.ON,
            );
          } else {
            spacesViewController.actions.updateBubbleMode(
              SpacesViewBubbleMode.OFF,
            );
          }
        }}
      />
      <AstralSortIcon
        onClick={() => {
          spacesViewController.actions.autoSort();
        }}
      />
      <AstralFullscreenIcon
        onClick={() => {
          if (
            spacesViewController.state.selectedIdeas.length ===
            ideaListController.state.objs.length
          ) {
            spacesViewController.actions.deselectAll();
          } else {
            spacesViewController.actions.selectAll();
          }
        }}
        className={
          spacesViewController.state.selectedIdeas.length >=
            ideaListController.state.objs.length &&
          spacesViewController.state.selectedIdeas.length > 0
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
      />
      <BarDividerIndicator />
      <AstralCameraIcon
        onClick={() => {
          spacesViewController.actions.takeScreenshot();
        }}
      />
      <AstralLinkIcon
        onClick={() => {
          spacesViewModalsController.shareViewController.open();
        }}
      />
      <BarDividerIndicator />
    </div>
  );
}
