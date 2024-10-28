import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralBubbleIcon } from '@/icons/bubble/main';
import { AstralCalendarIcon } from '@/icons/calendar/main';
import { AstralCameraIcon } from '@/icons/camera/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { AstralFullscreenIcon } from '@/icons/fullscreen/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralSyncAltIcon } from '@/icons/sync-alt/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForGalleryList } from '@/server/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
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
  const SpacesSceneController = useContext(ContextForSpacesScene);
  const SpacesSceneModalsController = useContext(ContextForSpacesSceneModals);
  const user = useGlobalUser((state) => state.user);
  const space = useContext(ContextForSpaceMain);
  const galleryController = useContext(ContextForGalleryList);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            SpacesSceneController.state.sidebarVisibility ===
            SpacesSceneSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          SpacesSceneController.actions.updateSidebarVisibility(
            SpacesSceneController.state.sidebarVisibility ===
              SpacesSceneSidebarVisibility.CLOSED
              ? SpacesSceneSidebarVisibility.OPEN
              : SpacesSceneSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralFullscreenIcon
        onClick={() => {
          if (
            SpacesSceneController.state.selectedIdeas.length ===
            ideaListController.state.objs.length
          ) {
            SpacesSceneController.actions.deselectAll();
          } else {
            SpacesSceneController.actions.selectAll();
          }
        }}
        className={
          SpacesSceneController.state.selectedIdeas.length >=
            ideaListController.state.objs.length &&
          SpacesSceneController.state.selectedIdeas.length > 0
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
      />
      <AstralCalendarIcon
        onClick={() => {
          SpacesSceneController.actions.goToGallery(
            galleryController.actions.stateActions.find(user.journalId),
          );
          SpacesSceneController.actions.updateSidebarContentMode(
            SpacesSceneSidebarContentMode.EXPLORER,
          );
        }}
      />
      <AstralFolderIcon
        onClick={() => {
          SpacesSceneController.actions.goToGallery(
            galleryController.actions.stateActions.find(
              space.state.obj.galleryId,
            ),
          );
          SpacesSceneController.actions.updateSidebarContentMode(
            SpacesSceneSidebarContentMode.EXPLORER,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralSyncAltIcon
        className={
          SpacesSceneController.state.linkMode === SpacesSceneLinkMode.ON
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (SpacesSceneController.state.linkMode === SpacesSceneLinkMode.ON) {
            SpacesSceneController.actions.updateLinkMode(
              SpacesSceneLinkMode.OFF,
            );
          } else {
            SpacesSceneController.actions.updateLinkMode(
              SpacesSceneLinkMode.ON,
            );
          }
        }}
      />
      <AstralBubbleIcon
        className={
          SpacesSceneController.state.bubbleMode === SpacesSceneBubbleMode.OFF
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (
            SpacesSceneController.state.bubbleMode === SpacesSceneBubbleMode.OFF
          ) {
            SpacesSceneController.actions.updateBubbleMode(
              SpacesSceneBubbleMode.ON,
            );
          } else {
            SpacesSceneController.actions.updateBubbleMode(
              SpacesSceneBubbleMode.OFF,
            );
          }
        }}
      />
      <BarDividerIndicator />
      <AstralCameraIcon
        onClick={() => {
          SpacesSceneController.actions.takeScreenshot();
        }}
      />
      <AstralLinkIcon
        onClick={() => {
          SpacesSceneModalsController.shareViewController.open();
        }}
      />
    </div>
  );
}
