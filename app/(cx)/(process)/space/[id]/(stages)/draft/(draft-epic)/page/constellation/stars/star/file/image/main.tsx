import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ConstellationStarContext } from '@/(logic)/internal/handler/draft/star/main';

export function FileImageStar() {
  const { star, x, y, constraintsRef, activateStar } =
    useContext(ConstellationStarContext);

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex aspect-[13/16] w-[160px] items-center top-[${x}] left-[${y}] bg-white`}
        style={{ x, y }}
      >
        <div
          className='flex h-full w-full flex-shrink-0 cursor-pointer flex-col  p-[10px] pb-[10px]'
          onClick={(e) => {
            e.stopPropagation();
            setTimeout(() => {
              activateStar();
            }, 300);
          }}
        >
          <img
            className='pointer-events-none aspect-square aspect-square w-full flex-shrink-0 border-[2px] border-slate-300'
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
