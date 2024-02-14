import { useContext } from 'react';
import { motion } from 'framer-motion';
import { StarMotionContext } from '@/(cosmos)/(handler)/draft/star/main';
import { DraftContext } from '@/(cosmos)/(apollo)/space/[id]/(stages)/draft/page';

export function ScoreRhythmStar() {
  const { star, x, y, constraintsRef, activateStar } =
    useContext(StarMotionContext);
  const { starId } = useContext(DraftContext);
  const active = starId === star.id;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex h-[150px] w-[100px] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <div
          className='flex h-full w-full flex-shrink-0 flex-col'
          onDragStart={() => {
            activateStar();
          }}
        >
          <img
            className='pointer-events-none aspect-square h-[100px] w-[100px] flex-shrink-0 rounded-full border-[2px] border-slate-300'
            src={star?.file?.src}
          />
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {star.title} {star.variant} {star.file?.variant}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

