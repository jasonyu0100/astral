'use client';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx, roundedFx } from '@/style/data';
import { UserDpElement } from '@/ui/element/user/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import { useContext, useRef, useState } from 'react';
import Moveable from 'react-moveable';
import {
  ContextForSpaceMap,
  SpaceMapConnectionMode,
  SpaceMapIdeaMode,
  SpaceMapPeopleMode,
} from '../../../../../../controller/map/main';
import { parseTransformString } from '../../../../../../utils/transformation/main';

export function SpaceMapMovable({ children }: { children: React.ReactNode }) {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const mapController = useContext(ContextForSpaceMap);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const index = useContext(ContextForIndexable);
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
            mapController.updateSelectedIdea(null);
          } else {
            hoverableController.onHover();
            mapController.updateSelectedIdea(ideaObj);
          }
        }}
      >
        <div className='flex h-full w-full flex-col items-center justify-center'>
          {children}
        </div>
        {mapController.ideaMode !== SpaceMapIdeaMode.VISUAL && (
          <div className='absolute top-0 flex h-full w-full justify-center'>
            <div className='flex aspect-[12/9] w-full flex-col space-y-[5px] bg-yellow-500 p-[10px]'>
              <p className='w-full text-[10px] font-bold text-black'>
                {ideaListController.state.currentObj?.title || 'Untitled'}
              </p>
              <p className='w-full text-[10px] font-bold text-black'>
                {ideaListController.state.currentObj?.description ||
                  'No description'}
              </p>
              <p className=' w-full text-[10px] font-light text-black'>
                {ideaListController.state.currentObj?.width},
                {ideaListController.state.currentObj?.height},
                {ideaListController.state.currentObj?.x},
                {ideaListController.state.currentObj?.y}
              </p>
            </div>
          </div>
        )}
        {mapController.connectionMode === SpaceMapConnectionMode.DEFAULT && (
          <div className='absolute bottom-[-3rem] flex w-full flex-row items-center justify-center'>
            <GlassWindowFrame
              className='h-[2rem] w-[2rem]'
              roundedFx={roundedFx['rounded-full']}
            >
              <GlassWindowContents
                className={cn('flex items-center justify-center rounded-full', {
                  'bg-blue-500': ideaObj.id === mapController.selectedIdea?.id,
                })}
              >
                <p className='font-bold text-white'>{index + 1}</p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
          </div>
        )}
        {mapController.peopleMode === SpaceMapPeopleMode.ON && (
          <div className='absolute bottom-[0.5rem] left-[0.5rem] flex flex-col items-center'>
            <UserDpElement
              fileElem={loggedInUser.dp}
              className='h-[1.5rem] w-[1.5rem]'
            />
          </div>
        )}
      </div>
      <Moveable
        ref={moveableRef}
        target={
          mapController.selectedIdea?.id === ideaObj.id &&
          hoverableController.hovered
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
