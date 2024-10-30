import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralBubbleIcon } from '@/icons/bubble/main';
import { AstralCameraIcon } from '@/icons/camera/main';
import { AstralCategoryIcon } from '@/icons/category/main';
import { AstralCursorIcon } from '@/icons/cursor/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { AstralFullscreenIcon } from '@/icons/fullscreen/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralSyncAltIcon } from '@/icons/sync-alt/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForGalleryList } from '@/server/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesScene,
  SpacesSceneBubbleMode,
  SpacesSceneLinkMode,
  SpacesSceneSidebarContentMode,
  SpacesSceneSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesSceneModals } from '../../../../../modal/controller/main';

export function SpacesSceneHeaderLeft() {
  const spacesSceneController = useContext(ContextForSpacesScene);
  const spacesSceneModalsController = useContext(ContextForSpacesSceneModals);
  const user = useGlobalUser((state) => state.user);
  const galleryController = useContext(ContextForGalleryList);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            spacesSceneController.state.sidebarVisibility ===
            SpacesSceneSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          spacesSceneController.actions.updateSidebarVisibility(
            spacesSceneController.state.sidebarVisibility ===
              SpacesSceneSidebarVisibility.CLOSED
              ? SpacesSceneSidebarVisibility.OPEN
              : SpacesSceneSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralCursorIcon />
      <AstralSyncAltIcon
        className={
          spacesSceneController.state.linkMode === SpacesSceneLinkMode.ON
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (spacesSceneController.state.linkMode === SpacesSceneLinkMode.ON) {
            spacesSceneController.actions.updateLinkMode(
              SpacesSceneLinkMode.OFF,
            );
          } else {
            spacesSceneController.actions.updateLinkMode(
              SpacesSceneLinkMode.ON,
            );
          }
        }}
      />
      <AstralBubbleIcon
        className={
          spacesSceneController.state.bubbleMode === SpacesSceneBubbleMode.OFF
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (
            spacesSceneController.state.bubbleMode === SpacesSceneBubbleMode.OFF
          ) {
            spacesSceneController.actions.updateBubbleMode(
              SpacesSceneBubbleMode.ON,
            );
          } else {
            spacesSceneController.actions.updateBubbleMode(
              SpacesSceneBubbleMode.OFF,
            );
          }
        }}
      />
      <BarDividerIndicator />
      <AstralFullscreenIcon
        onClick={() => {
          if (
            spacesSceneController.state.selectedIdeas.length ===
            ideaListController.state.objs.length
          ) {
            spacesSceneController.actions.deselectAll();
          } else {
            spacesSceneController.actions.selectAll();
          }
        }}
        className={
          spacesSceneController.state.selectedIdeas.length >=
            ideaListController.state.objs.length &&
          spacesSceneController.state.selectedIdeas.length > 0
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
      />
      <AstralCategoryIcon
        onClick={() => {
          spacesSceneController.actions.sortIdeas();
        }}
      />
      <AstralCameraIcon
        onClick={() => {
          spacesSceneController.actions.takeScreenshot();
        }}
      />
      <AstralLinkIcon
        onClick={() => {
          spacesSceneModalsController.shareViewController.open();
        }}
      />
      <AstralFolderIcon
        onClick={() => {
          spacesSceneController.actions.goToGalleryThenCollection(
            galleryController.actions.stateActions.find(user.journalId),
          );
          spacesSceneController.actions.updateSidebarContentMode(
            SpacesSceneSidebarContentMode.EXPLORER,
          );
        }}
      />
    </div>
  );
}
