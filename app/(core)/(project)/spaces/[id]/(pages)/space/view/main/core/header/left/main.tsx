import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralBubbleIcon } from '@/icons/bubble/main';
import { AstralCameraIcon } from '@/icons/camera/main';
import { AstralCategoryIcon } from '@/icons/category/main';
import { AstralCursorIcon } from '@/icons/cursor/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { AstralFullscreenIcon } from '@/icons/fullscreen/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralSyncAltIcon } from '@/icons/sync-alt/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesSpace,
  SpacesSpaceBubbleMode,
  SpacesSpaceInteractionMode,
  SpacesSpaceLinkMode,
  SpacesSpaceSidebarContentMode,
  SpacesSpaceSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesSpaceHeaderLeft() {
  const spacesSpaceController = useContext(ContextForSpacesSpace);
  // const spacesSpaceModalsController = useContext(ContextForSpacesSpaceModals);
  const user = useGlobalUser((state) => state.user);
  const galleryController = useContext(ContextForGalleryList);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            spacesSpaceController.state.sidebarVisibility ===
            SpacesSpaceSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          spacesSpaceController.actions.updateSidebarVisibility(
            spacesSpaceController.state.sidebarVisibility ===
              SpacesSpaceSidebarVisibility.CLOSED
              ? SpacesSpaceSidebarVisibility.OPEN
              : SpacesSpaceSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralCursorIcon
        className={
          spacesSpaceController.state.interactionMode ===
          SpacesSpaceInteractionMode.CURSOR
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (
            spacesSpaceController.state.interactionMode ===
            SpacesSpaceInteractionMode.CURSOR
          ) {
            spacesSpaceController.actions.updateInteractionMode(
              SpacesSpaceInteractionMode.SELECTOR,
            );
          } else {
            spacesSpaceController.actions.updateInteractionMode(
              SpacesSpaceInteractionMode.CURSOR,
            );
          }
        }}
      />
      <AstralSyncAltIcon
        className={
          spacesSpaceController.state.linkMode === SpacesSpaceLinkMode.ON
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (spacesSpaceController.state.linkMode === SpacesSpaceLinkMode.ON) {
            spacesSpaceController.actions.updateLinkMode(
              SpacesSpaceLinkMode.OFF,
            );
          } else {
            spacesSpaceController.actions.updateLinkMode(
              SpacesSpaceLinkMode.ON,
            );
          }
        }}
      />
      <AstralBubbleIcon
        className={
          spacesSpaceController.state.bubbleMode === SpacesSpaceBubbleMode.OFF
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (
            spacesSpaceController.state.bubbleMode === SpacesSpaceBubbleMode.OFF
          ) {
            spacesSpaceController.actions.updateBubbleMode(
              SpacesSpaceBubbleMode.ON,
            );
          } else {
            spacesSpaceController.actions.updateBubbleMode(
              SpacesSpaceBubbleMode.OFF,
            );
          }
        }}
      />
      <BarDividerIndicator />
      <AstralFolderIcon
        onClick={() => {
          spacesSpaceController.actions.goToGalleryThenCollection(
            galleryController.actions.stateActions.find(user.journalId),
          );
          spacesSpaceController.actions.updateSidebarContentMode(
            SpacesSpaceSidebarContentMode.JOURNAL,
          );
        }}
      />
      <AstralCategoryIcon
        onClick={() => {
          spacesSpaceController.actions.sortIdeas();
        }}
      />
      <AstralFullscreenIcon
        onClick={() => {
          if (
            spacesSpaceController.state.selectedIdeas.length ===
            ideaListController.state.objs.length
          ) {
            spacesSpaceController.actions.deselectAll();
          } else {
            spacesSpaceController.actions.selectAll();
          }
        }}
        className={
          spacesSpaceController.state.selectedIdeas.length >=
            ideaListController.state.objs.length &&
          spacesSpaceController.state.selectedIdeas.length > 0
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
      />
      <AstralCameraIcon
        onClick={() => {
          spacesSpaceController.actions.takeScreenshot();
        }}
      />
    </div>
  );
}
