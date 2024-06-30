'use client';
import { useControllerForHoverable } from '@/(logic)/contexts/hoverable/main';
import { FileElemVariant } from '@/(server)/(model)/elements/file/main';
import { ElementVariant } from '@/(server)/(model)/elements/main';
import { TextElemVariant } from '@/(server)/(model)/elements/text/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext, useRef } from 'react';
import Moveable from 'react-moveable';

export function SpaceMapMovable() {
  const ideaObj = useContext(ContextForSceneIdeaObj);
  const targetRef = useRef<HTMLDivElement>(null);
  const moveableRef = useRef<Moveable>(null);
  const hoverableController = useControllerForHoverable();

  // function update() {
  //   ideaListController.actions.stateActions.updateObj(ideaObj.id, {
  //     ...ideaObj,
  //     x,
  //     y,
  //     scale: scaleX,
  //   });
  // }

  function parseTransformString(transformString: string) {
    // Regular expressions to match each transform function
    const translateRegex = /translate\(([^,]+),([^)]+)\)/;
    const rotateRegex = /rotate\(([^)]+)\)/;
    const scaleRegex = /scale\(([^,]+),([^)]+)\)/;

    // Match each transform function in the string
    const translateMatch = transformString.match(translateRegex);
    const rotateMatch = transformString.match(rotateRegex);
    const scaleMatch = transformString.match(scaleRegex);

    // Initialize variables for extracted values
    let x = 0,
      y = 0,
      rotation = 0,
      scaleX = 1,
      scaleY = 1;

    // Extract values if matches are found
    if (translateMatch) {
      x = parseFloat(translateMatch[1].trim());
      y = parseFloat(translateMatch[2].trim());
    }
    if (rotateMatch) {
      rotation = parseFloat(rotateMatch[1].trim());
    }
    if (scaleMatch) {
      scaleX = parseFloat(scaleMatch[1].trim());
      scaleY = parseFloat(scaleMatch[2].trim());
    }

    // Return an object with parsed values
    return {
      rotation,
      x,
      y,
      scale: scaleX,
      scaleY,
    };
  }

  return (
    <>
      <div
        className={`element absolute cursor-pointer`}
        style={{
          width: `${ideaObj.width}px`,
          height: `${ideaObj.height}px`,
          top: `${ideaObj.y}px`,
          left: `${ideaObj.x}px`,
        }}
        ref={targetRef}
        onClick={() => {
          if (hoverableController.hovered) {
            hoverableController.onUnhover();
          } else {
            hoverableController.onHover();
          }
        }}
      >
        <div className='flex h-full w-full items-center justify-center p-[1rem]'>
          {ideaObj.variant === ElementVariant.FILE && (
            <>
              {ideaObj.fileElem?.variant === FileElemVariant.IMAGE && (
                <div
                  className='aspect-[11/13] h-full bg-white shadow-lg'
                  style={{ padding: '10%' }}
                >
                  <img
                    src={ideaObj.fileElem.src}
                    alt={ideaObj.title}
                    className='aspect-square w-full object-cover'
                  />
                </div>
              )}
            </>
          )}
          {ideaObj.variant === ElementVariant.TEXT && (
            <>
              {ideaObj.textElem?.variant === TextElemVariant.LINE && (
                <div
                  className='aspect-square h-full w-full flex-col items-center justify-center'
                  style={{ padding: '10%' }}
                >
                  <p className='font-bold text-slate-300'>
                    {ideaObj.textElem?.text}
                  </p>
                </div>
              )}
              {ideaObj.textElem?.variant === TextElemVariant.BLOCK && (
                <div
                  className='h-full w-full flex-col items-center justify-center bg-white'
                  style={{ padding: '10%' }}
                >
                  <p className='text-xs font-bold text-black'>
                    {ideaObj.textElem?.text}
                  </p>
                </div>
              )}
              {ideaObj.textElem?.variant === TextElemVariant.STICKY && (
                <div
                  className='aspect-square h-full bg-yellow-500 shadow-lg'
                  style={{ padding: '10%' }}
                >
                  <p className='text-xs font-bold text-black'>
                    {ideaObj.textElem?.text}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Moveable
        ref={moveableRef}
        targets={[...(hoverableController.hovered ? [targetRef] : [])]}
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
          parseTransformString(e.transform);
        }}
        onScale={(e) => {
          e.target.style.transform = e.drag.transform;
          parseTransformString(e.drag.transform);
        }}
        onBound={(e) => {
          console.log(e);
        }}
        onRotate={(e) => {
          e.target.style.transform = e.drag.transform;
          parseTransformString(e.drag.transform);
        }}
      />
    </>
  );
}
