import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralCameraIcon } from '@/icons/camera/main';
import { AstralCategoryIcon } from '@/icons/category/main';
import { AstralCursorIcon } from '@/icons/cursor/main';
import { AstralFullscreenIcon } from '@/icons/fullscreen/main';
import { AstralLabelIcon } from '@/icons/label/main';
import { AstralPolylineIcon } from '@/icons/polyline/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesSpace,
  SpacesSpaceBubbleMode,
  SpacesSpaceInteractionMode,
  SpacesSpaceLinkMode,
  SpacesSpaceSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesSpaceHeaderLeft() {
  const spacesSpaceController = useContext(ContextForSpacesSpace);
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
      <AstralPolylineIcon
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
      <AstralLabelIcon
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
