import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralCameraIcon } from '@/icons/camera/main';
import { AstralCategoryIcon } from '@/icons/category/main';
import { AstralFullscreenIcon } from '@/icons/fullscreen/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesIdeas,
  SpacesIdeasSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesIdeasHeaderLeft() {
  const spacesSpaceController = useContext(ContextForSpacesIdeas);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <div
        className={`flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full ${spacesSpaceController.state.sidebarVisibility === SpacesIdeasSidebarVisibility.OPEN ? 'bg-blue-500' : 'bg-slate-500'}`}
        onClick={() => {
          spacesSpaceController.actions.updateSidebarVisibility(
            spacesSpaceController.state.sidebarVisibility ===
              SpacesIdeasSidebarVisibility.CLOSED
              ? SpacesIdeasSidebarVisibility.OPEN
              : SpacesIdeasSidebarVisibility.CLOSED,
          );
        }}
      >
        <AstralSidebarLeftIcon
          className={ctwn({
            'rotate-180 transform':
              spacesSpaceController.state.sidebarVisibility ===
              SpacesIdeasSidebarVisibility.CLOSED,
          })}
        />
      </div>
      {/* <BarDividerIndicator /> */}
      {/* <AstralCursorIcon
        className={
          spacesSpaceController.state.interactionMode ===
          SpacesIdeasInteractionMode.CURSOR
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (
            spacesSpaceController.state.interactionMode ===
            SpacesIdeasInteractionMode.CURSOR
          ) {
            spacesSpaceController.actions.updateInteractionMode(
              SpacesIdeasInteractionMode.SELECTOR,
            );
          } else {
            spacesSpaceController.actions.updateInteractionMode(
              SpacesIdeasInteractionMode.CURSOR,
            );
          }
        }}
      />
      <AstralPolylineIcon
        className={
          spacesSpaceController.state.linkMode === SpacesIdeasLinkMode.ON
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (spacesSpaceController.state.linkMode === SpacesIdeasLinkMode.ON) {
            spacesSpaceController.actions.updateLinkMode(
              SpacesIdeasLinkMode.OFF,
            );
          } else {
            spacesSpaceController.actions.updateLinkMode(
              SpacesIdeasLinkMode.ON,
            );
          }
        }}
      />
      <AstralLabelIcon
        className={
          spacesSpaceController.state.bubbleMode === SpacesIdeasBubbleMode.OFF
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (
            spacesSpaceController.state.bubbleMode === SpacesIdeasBubbleMode.OFF
          ) {
            spacesSpaceController.actions.updateBubbleMode(
              SpacesIdeasBubbleMode.ON,
            );
          } else {
            spacesSpaceController.actions.updateBubbleMode(
              SpacesIdeasBubbleMode.OFF,
            );
          }
        }}
      /> */}
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
