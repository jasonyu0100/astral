'use client';
import { FileElemVariant } from '@/(server)/(model)/elements/file/main';
import { ElementVariant } from '@/(server)/(model)/elements/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext, useRef } from 'react';
import Moveable from 'react-moveable';

export function SpaceMapMovable() {
  const ideaObj = useContext(ContextForSceneIdeaObj);
  const targetRef = useRef<HTMLDivElement>(null);
  const moveableRef = useRef<Moveable>(null);

  return (
    <>
      <div
        className={`target absolute cursor-pointer`}
        style={{
          width: `${ideaObj.width}px`,
          height: `${ideaObj.height}px`,
          top: `${ideaObj.y}px`,
          left: `${ideaObj.x}px`,
        }}
        ref={targetRef}
      >
        <div className='flex h-full w-full items-center justify-center'>
          {ideaObj.variant === ElementVariant.FILE && (
            <>
              {ideaObj.fileElem?.variant === FileElemVariant.IMAGE && (
                <img
                  src={ideaObj.fileElem.src}
                  alt={ideaObj.title}
                  className='h-full w-full object-cover'
                />
              )}
            </>
          )}
        </div>
      </div>
      <Moveable
        ref={moveableRef}
        target={targetRef}
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
        elementGuidelines={['.element1', '.element2', '.element3']}
        bounds={{ left: 0, top: 0, right: 0, bottom: 0, position: 'css' }}
        verticalGuidelines={[
          0, 100, 200, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
        ]}
        horizontalGuidelines={[
          0, 100, 200, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
        ]}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onScale={(e) => {
          e.target.style.transform = e.drag.transform;
        }}
        onBound={(e) => {
          console.log(e);
        }}
        onRotate={(e) => {
          e.target.style.transform = e.drag.transform;
        }}
      />
    </>
  );
}
