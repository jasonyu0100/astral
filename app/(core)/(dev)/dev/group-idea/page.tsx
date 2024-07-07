'use client';
import Moveable from 'react-moveable';

export default function App() {
  return (
    <div className='h-full w-full p-[5rem]'>
      <div className='container h-full w-full border-[1rem] border-white bg-black'>
        <div className='group flex flex-row space-x-[1rem]'>
          <div className='target target1 h-[5rem] w-[5rem]'>
            <div className='flex h-full w-full items-center justify-center'>
              <p className='font-bold text-slate-800'>HOPE</p>
            </div>
          </div>
          <div className='target target2 h-[5rem] w-[5rem]'>
            <div className='flex h-full w-full items-center justify-center'>
              <p className='font-bold text-slate-800'>HOPE</p>
            </div>
          </div>
          <div className='target target3 h-[5rem] w-[5rem]'>
            <div className='flex h-full w-full items-center justify-center'>
              <p className='font-bold text-slate-800'>HOPE</p>
            </div>
          </div>
        </div>

        <Moveable
          target={'.target'}
          hideChildMoveableDefaultLines={false}
          draggable={true}
          throttleDrag={1}
          edgeDraggable={false}
          startDragRotate={0}
          bounds={{ left: 0, top: 0, right: 0, bottom: 0, position: 'css' }}
          throttleDragRotate={0}
          scalable={true}
          keepRatio={true}
          throttleScale={0}
          renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
          rotatable={true}
          throttleRotate={0}
          rotationPosition={'top'}
          onDragGroup={({ events }) => {
            events.forEach((ev) => {
              ev.target.style.transform = ev.transform;
            });
          }}
          onScaleGroup={({ events }) => {
            events.forEach((ev) => {
              ev.target.style.transform = ev.drag.transform;
            });
          }}
          onRotateGroup={({ events }) => {
            events.forEach((ev) => {
              ev.target.style.transform = ev.drag.transform;
            });
          }}
        />
      </div>
    </div>
  );
}
