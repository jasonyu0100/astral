import { useContext } from 'react';
import { motion } from 'framer-motion';
import { StarMotionContext } from '@/(verses)/(handler)/draft/star/main';
import { DraftContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/page';

export function NoteStickyStar() {
  const { star, x, y, constraintsRef, activateStar } =
    useContext(StarMotionContext);
  const { starId } = useContext(DraftContext);
  const active = starId === star.id;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex w-[150px] aspect-[14/16] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <div
          className='flex h-full w-full flex-shrink-0 flex-col'
          onDragStart={() => {
            activateStar();
          }}
        >
          <div className="h-[full] w-[full] bg-yellow-400 p-[10px]" style={{height: '100%'}}>
            <p>{star.note?.text}</p>
          </div>
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {star.title} {star.variant} {star.note?.variant}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
