'use client';
import {
  ContextForSpacesIdeas,
  SpacesIdeasBubbleMode,
  SpacesIdeasInteractionMode,
} from '@/(core)/(project)/spaces/[id]/(pages)/ideas/controller/main';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext, useEffect, useRef, useState } from 'react';
import Moveable from 'react-moveable';
import { parseTransformString } from '../../../../../../../utils/main';
import { SpacesIdeasIdeaIndicator } from './indicator/main';
import { SpacesIdeasIdeaLabel } from './label/main';

export function SpacesIdeasMovable({
  children,
}: {
  children: React.ReactNode;
}) {
  const spacesSpaceController = useContext(ContextForSpacesIdeas);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const ideaObj = useContext(ContextForIdeaObj);
  const targetRef = useRef<HTMLDivElement>(null);
  const moveableRef = useRef<Moveable>(null);
  const hoverableController = useControllerForHoverable();

  const [initialX, setInitialX] = useState(ideaObj.x);
  const [initialY, setInitialY] = useState(ideaObj.y);
  const [initialScale, setInitialScale] = useState(ideaObj.scale);
  const [initialRotation, setInitialRotation] = useState(ideaObj.rotation);

  const selected =
    spacesSpaceController.actions.checkContainsSelectedIdea(ideaObj);

  function updateViaTransformationObj(transformString: string) {
    const transformationObj = parseTransformString(transformString);
    console.log('update obj', transformationObj.x, transformationObj.y);
    ideaListController.actions.stateActions.updateObj(ideaObj.id, {
      ...ideaObj,
      x: Math.round(initialX + transformationObj.x),
      y: Math.round(initialY + transformationObj.y),
      scale: transformationObj.scale * initialScale,
      rotation: Math.round(initialRotation + transformationObj.rotation),
    });
  }

  useEffect(() => {
    setInitialX(ideaObj.x);
    setInitialY(ideaObj.y);
    setInitialScale(ideaObj.scale);
    setInitialRotation(ideaObj.rotation);
  }, [spacesSpaceController.state.updateToggle]);

  return (
    <div>
      <div
        className={`element absolute cursor-move`}
        style={{
          width: `${ideaObj.width * initialScale}px`,
          top: `${initialY}px`,
          left: `${initialX}px`,
        }}
        ref={targetRef}
        onMouseOver={() => {
          if (selected) {
            return;
          } else {
            if (
              spacesSpaceController.state.interactionMode ===
              SpacesIdeasInteractionMode.SELECTOR
            ) {
              hoverableController.onHover();
              spacesSpaceController.actions.updateSelectedIdeas([
                ...spacesSpaceController.state.selectedIdeas,
                ideaObj,
              ]);
            }
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (hoverableController.hovered) {
            hoverableController.onUnhover();
            spacesSpaceController.actions.updateSelectedIdeas(
              spacesSpaceController.state.selectedIdeas.filter(
                (selectedIdea) => selectedIdea.id !== ideaObj.id,
              ),
            );
          } else {
            hoverableController.onHover();
            if (selected) {
              return;
            } else {
              spacesSpaceController.actions.updateSelectedIdeas([
                ...spacesSpaceController.state.selectedIdeas,
                ideaObj,
              ]);
            }
          }
        }}
      >
        <div className='relative p-[1rem]'>{children}</div>
        {spacesSpaceController.state.bubbleMode === SpacesIdeasBubbleMode.ON ? (
          <SpacesIdeasIdeaLabel />
        ) : (
          <SpacesIdeasIdeaIndicator />
        )}
      </div>
      <Moveable
        ref={moveableRef}
        target={hoverableController.hovered && selected ? targetRef : null}
        draggable={true}
        scalable={true}
        keepRatio={true}
        isDisplaySnapDigit={true}
        isDisplayInnerSnapDigit={false}
        throttleDrag={1}
        edgeDraggable={true}
        startDragRotate={0}
        throttleDragRotate={0}
        snappable={true}
        rotatable={true}
        snapThreshold={5}
        snapDirections={{
          top: true,
          left: true,
          bottom: true,
          right: true,
        }}
        elementSnapDirections={{
          top: true,
          left: true,
          bottom: true,
          right: true,
          center: true,
          middle: true,
        }}
        elementGuidelines={['.element']}
        bounds={{ left: 0, top: 0, right: 0, bottom: 0, position: 'css' }}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
          updateViaTransformationObj(e.transform);
        }}
        onScale={(e) => {
          e.target.style.transform = e.drag.transform;
          updateViaTransformationObj(e.transform);
        }}
        onBound={(e) => {
          console.log(e);
        }}
        onRotate={(e) => {
          e.target.style.transform = e.drag.transform;
          updateViaTransformationObj(e.transform);
        }}
      />
    </div>
  );
}
