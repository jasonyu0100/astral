import { useContext } from 'react';
import { motion } from 'framer-motion';
import { StarHandlerContext } from '@/(logic)/internal/handler/stars/star/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/stars/main';

export function NoteStickyStar() {
  const { star, x, y, constraintsRef, activateStar } =
    useContext(StarHandlerContext);
  const starsHandler = useContext(StarsHandlerContext);
  const active = starsHandler.starId === star.id;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex aspect-[14/16] w-[150px] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <div
          className='flex h-full w-full flex-shrink-0 flex-col'
          onClick={(e) => {
            activateStar();
            e.stopPropagation();
          }}
        >
          <div
            className='h-[full] w-[full] bg-yellow-400 p-[10px]'
            style={{ height: '100%' }}
          >
            <p>{star.note?.text}</p>
          </div>
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {star.title}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
