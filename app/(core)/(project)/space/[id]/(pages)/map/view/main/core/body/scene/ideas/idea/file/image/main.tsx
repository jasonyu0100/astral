import { useContext } from 'react';
import { motion } from 'framer-motion';
import { IdeaHandlerContext } from '@/(controller)/ideas/idea/main';

export function FileImageIdea() {
  const { idea, x, y, constraintsRef, activateIdea } =
    useContext(IdeaHandlerContext);

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
              activateIdea();
            }, 300);
          }}
        >
          <img
            className='pointer-events-none aspect-square aspect-square w-full flex-shrink-0 border-[2px] border-slate-300'
            src={idea?.file?.src}
          />
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-black'>
              {idea.title}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
