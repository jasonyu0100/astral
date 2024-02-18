import { useContext } from 'react';
import { motion } from 'framer-motion';
import { StarMotionContext } from '@/(verses)/(handler)/draft/star/main';
import { DraftContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/page';

export function FileImageStar() {
  const { star, x, y, constraintsRef, activateStar } =
    useContext(StarMotionContext);
  const { starId } = useContext(DraftContext);
  const active = starId === star.id;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex aspect-[13/16] w-[160px] items-center p-[10px] pb-[10px] top-[${x}] left-[${y}] bg-white`}
        style={{ x, y }}
      >
        <div
          className='flex h-full w-full flex-shrink-0 flex-col '
          onDragStart={() => {
            activateStar();
          }}
        >
          <img
            className='pointer-events-none aspect-square w-full aspect-square flex-shrink-0 border-[2px] border-slate-300'
            src={star?.file?.src}
          />
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-black'>
              {star.title}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
