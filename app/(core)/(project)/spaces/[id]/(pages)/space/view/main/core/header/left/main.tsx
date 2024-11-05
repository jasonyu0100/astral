import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralBubbleIcon } from '@/icons/bubble/main';
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
  ContextForSpaceSpace,
  SpaceSpaceBubbleMode,
  SpaceSpaceInteractionMode,
  SpaceSpaceLinkMode,
  SpaceSpaceSidebarContentMode,
  SpaceSpaceSidebarVisibility,
} from '../../../../../controller/main';

export function SpaceSpaceHeaderLeft() {
  const spaceSpaceController = useContext(ContextForSpaceSpace);
  // const spaceSpaceModalsController = useContext(ContextForSpaceSpaceModals);
  const user = useGlobalUser((state) => state.user);
  const galleryController = useContext(ContextForGalleryList);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            spaceSpaceController.state.sidebarVisibility ===
            SpaceSpaceSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          spaceSpaceController.actions.updateSidebarVisibility(
            spaceSpaceController.state.sidebarVisibility ===
              SpaceSpaceSidebarVisibility.CLOSED
              ? SpaceSpaceSidebarVisibility.OPEN
              : SpaceSpaceSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralCursorIcon
        className={
          spaceSpaceController.state.interactionMode ===
          SpaceSpaceInteractionMode.CURSOR
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (
            spaceSpaceController.state.interactionMode ===
            SpaceSpaceInteractionMode.CURSOR
          ) {
            spaceSpaceController.actions.updateInteractionMode(
              SpaceSpaceInteractionMode.SELECTOR,
            );
          } else {
            spaceSpaceController.actions.updateInteractionMode(
              SpaceSpaceInteractionMode.CURSOR,
            );
          }
        }}
      />
      <AstralSyncAltIcon
        className={
          spaceSpaceController.state.linkMode === SpaceSpaceLinkMode.ON
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (spaceSpaceController.state.linkMode === SpaceSpaceLinkMode.ON) {
            spaceSpaceController.actions.updateLinkMode(SpaceSpaceLinkMode.OFF);
          } else {
            spaceSpaceController.actions.updateLinkMode(SpaceSpaceLinkMode.ON);
          }
        }}
      />
      <AstralBubbleIcon
        className={
          spaceSpaceController.state.bubbleMode === SpaceSpaceBubbleMode.OFF
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (
            spaceSpaceController.state.bubbleMode === SpaceSpaceBubbleMode.OFF
          ) {
            spaceSpaceController.actions.updateBubbleMode(
              SpaceSpaceBubbleMode.ON,
            );
          } else {
            spaceSpaceController.actions.updateBubbleMode(
              SpaceSpaceBubbleMode.OFF,
            );
          }
        }}
      />
      <BarDividerIndicator />
      <AstralFolderIcon
        onClick={() => {
          spaceSpaceController.actions.goToGalleryThenCollection(
            galleryController.actions.stateActions.find(user.journalId),
          );
          spaceSpaceController.actions.updateSidebarContentMode(
            SpaceSpaceSidebarContentMode.JOURNAL,
          );
        }}
      />
      <AstralCategoryIcon
        onClick={() => {
          spaceSpaceController.actions.sortIdeas();
        }}
      />
      <AstralFullscreenIcon
        onClick={() => {
          if (
            spaceSpaceController.state.selectedIdeas.length ===
            ideaListController.state.objs.length
          ) {
            spaceSpaceController.actions.deselectAll();
          } else {
            spaceSpaceController.actions.selectAll();
          }
        }}
        className={
          spaceSpaceController.state.selectedIdeas.length >=
            ideaListController.state.objs.length &&
          spaceSpaceController.state.selectedIdeas.length > 0
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
      />
      {/* <AstralCameraIcon
        onClick={() => {
          spaceSpaceController.actions.takeScreenshot();
        }}
      /> */}
    </div>
  );
}
