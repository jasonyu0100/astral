'use client';
import * as React from 'react';
import Moveable from 'react-moveable';

export default function App() {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const moveableRef = React.useRef<Moveable>(null);

  return (
    <div
      className='container relative bg-black'
      style={{ height: 500, width: 500 }}
    >
      <div
        className='target element2 bg-yellow-500'
        style={{
          width: '100px',
          height: '300px',
          top: '0px',
          left: '0px',
        }}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <p className='font-bold text-white'>HOPE</p>
        </div>
      </div>
      <div
        className='target element1 bg-green-500'
        style={{
          width: '300px',
          height: '100px',
          top: '400px',
          left: '50px',
        }}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <p className='font-bold text-white'>HOPE</p>
        </div>
      </div>
      <div className='target h-[100px] w-[100px]' ref={targetRef}>
        <div className='flex h-full w-full items-center justify-center'>
          <p className='font-bold text-white'>HOPE</p>
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
        snapDirections={{ top: true, left: true, bottom: true, right: true }}
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
        verticalGuidelines={[0, 100, 200, 400, 500]}
        horizontalGuidelines={[0, 100, 200, 400, 500]}
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
      />
    </div>
  );
}
