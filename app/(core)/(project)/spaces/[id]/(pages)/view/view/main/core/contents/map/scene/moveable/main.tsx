'use client';
import {
  ContextForSpacesView,
  SpacesViewBubbleMode,
} from '@/(core)/(project)/spaces/[id]/(pages)/view/controller/main';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext, useEffect, useRef, useState } from 'react';
import Moveable from 'react-moveable';
import { parseTransformString } from '../../../../../../../utils/main';
import { SpacesViewIdeaIndicator } from './indicator/main';

export function SpacesViewMovable({ children }: { children: React.ReactNode }) {
  const {
    state: {
      selectedIdeas,
      bubbleMode: peopleMode,
      linkMode: connectionMode,
      isSwitchOn,
    },
    actions: { updateSelectedIdeas, checkContainsSelectedIdea },
  } = useContext(ContextForSpacesView);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const ideaObj = useContext(ContextForIdeaObj);
  const targetRef = useRef<HTMLDivElement>(null);
  const moveableRef = useRef<Moveable>(null);
  const hoverableController = useControllerForHoverable();

  const [initialX, setInitialX] = useState(ideaObj.x);
  const [initialY, setInitialY] = useState(ideaObj.y);
  const [initialScale, setInitialScale] = useState(ideaObj.scale);
  const [initialRotation, setInitialRotation] = useState(ideaObj.rotation);

  const selected = checkContainsSelectedIdea(ideaObj);

  function updateViaTransformationObj(transformString: string) {
    const transformationObj = parseTransformString(transformString);
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
  }, [isSwitchOn]);

  return (
    <div>
      <div
        className={`element absolute cursor-pointer`}
        style={{
          width: `${ideaObj.width}px`,
          height: `${ideaObj.height}px`,
          top: `${initialY}px`,
          left: `${initialX}px`,
          rotate: `${initialRotation}deg`,
          scale: `${initialScale}`,
        }}
        ref={targetRef}
        onClick={(e) => {
          e.stopPropagation();
          if (hoverableController.hovered) {
            hoverableController.onUnhover();
            updateSelectedIdeas(
              selectedIdeas.filter(
                (selectedIdea) => selectedIdea.id !== ideaObj.id,
              ),
            );
          } else {
            hoverableController.onHover();
            if (selected) {
              return;
            } else {
              updateSelectedIdeas([...selectedIdeas, ideaObj]);
            }
          }
        }}
      >
        <div className='flex h-full w-full flex-col items-center justify-center'>
          {children}
        </div>
        {peopleMode === SpacesViewBubbleMode.ON && <SpacesViewIdeaIndicator />}
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
        edgeDraggable={false}
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
        // verticalGuidelines={[
        //   0, 100, 200, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
        // ]}
        // horizontalGuidelines={[
        //   0, 100, 200, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
        // ]}
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
