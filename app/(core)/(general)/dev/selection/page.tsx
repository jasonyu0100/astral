'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Selecto from 'react-selecto';

interface IdeaObj {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

const ideaObjects: IdeaObj[] = [
  { id: 1, x: 50, y: 50, width: 100, height: 100 },
  { id: 2, x: 200, y: 50, width: 100, height: 100 },
  // Add more items as needed
];

const App: React.FC = () => {
  const [selection, setSelection] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (id: number, x: number, y: number) => {
    const updatedObjects = ideaObjects.map((item) =>
      item.id === id ? { ...item, x, y } : item,
    );
    // Here you can update your state with the new positions
    console.log(updatedObjects);
  };

  const handleSelect = (e: any) => {
    const selectedIds = e.selected
      .map((el: HTMLElement) => parseInt(el.dataset.id!))
      .filter((id: number) => !isNaN(id));
    setSelection(selectedIds);
  };

  return (
    <div className='h-full w-full p-[5rem]'>
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          border: '1px solid #000',
          width: '100%',
          height: '100%',
        }}
      >
        <div ref={constraintsRef} style={{ width: '100%', height: '100%' }}>
          <Selecto
            container={containerRef.current}
            selectableTargets={['.selectable']}
            onSelect={handleSelect}
            hitRate={0}
          />
          {ideaObjects.map((item) => (
            <motion.div
              key={item.id}
              data-id={item.id}
              className='selectable'
              drag
              dragConstraints={constraintsRef}
              onDragEnd={(event, info) =>
                handleDragEnd(item.id, info.point.x, info.point.y)
              }
              initial={{ x: item.x, y: item.y }}
              animate={{ x: item.x, y: item.y }}
              style={{
                position: 'absolute',
                width: item.width,
                height: item.height,
                backgroundColor: selection.includes(item.id) ? 'blue' : 'gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
