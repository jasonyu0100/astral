'use client';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext, useRef, useState } from 'react';
import Moveable from 'react-moveable';
import {
  ContextForSpaceMap,
  SpaceMapConnectionMode,
  SpaceMapPeopleMode,
} from '../../../../../../controller/map/main';
import { parseTransformString } from '../../../../../../utils/transformation/main';
import { SpaceMapIdeaCollaborators } from './collaborators/main';
import { SpaceMapIdeaIndicator } from './indicator/main';

export function SpaceMapMovable({ children }: { children: React.ReactNode }) {
  const mapController = useContext(ContextForSpaceMap);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const ideaObj = useContext(ContextForSceneIdeaObj);
  const targetRef = useRef<HTMLDivElement>(null);
  const moveableRef = useRef<Moveable>(null);
  const hoverableController = useControllerForHoverable();

  const [initialX, setInitialX] = useState(ideaObj.x);
  const [initialY, setInitialY] = useState(ideaObj.y);
  const [initialScale, setInitialScale] = useState(ideaObj.scale);
  const [initialRotation, setInitialRotation] = useState(ideaObj.rotation);

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

  return (
    <div>
      <div
        className={`element absolute cursor-pointer`}
        style={{
          width: `${ideaObj.width}px`,
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
            mapController.updateSelectedIdeas(
              mapController.selectedIdeas.filter(
                (selectedIdea) => selectedIdea.id !== ideaObj.id,
              ),
            );
          } else {
            hoverableController.onHover();
            if (mapController.checkContainsSelectedIdea(ideaObj)) {
              return;
            } else {
              mapController.updateSelectedIdeas([
                ...mapController.selectedIdeas,
                ideaObj,
              ]);
            }
          }
        }}
      >
        <div className='flex h-full w-full flex-col items-center justify-center'>
          {children}
        </div>
        {mapController.connectionMode === SpaceMapConnectionMode.DEFAULT && (
          <SpaceMapIdeaIndicator />
        )}
        {mapController.peopleMode === SpaceMapPeopleMode.ON && (
          <SpaceMapIdeaCollaborators />
        )}
      </div>
      <Moveable
        ref={moveableRef}
        target={
          hoverableController.hovered &&
          mapController.checkContainsSelectedIdea(ideaObj)
            ? targetRef
            : null
        }
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
