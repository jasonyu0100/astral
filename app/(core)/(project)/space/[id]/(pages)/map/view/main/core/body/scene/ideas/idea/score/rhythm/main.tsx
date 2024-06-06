import { useContext } from 'react';
import { motion } from 'framer-motion';
import { IdeaHandlerContext } from '@/(controller)/(archive)/ideas/idea/main';
import { IdeasHandlerContext } from '@/(controller)/(archive)/ideas/main';

export function ScoreRhythmIdea() {
  const { idea, x, y, constraintsRef, activateIdea } =
    useContext(IdeaHandlerContext);
  const ideasHandler = useContext(IdeasHandlerContext);
  const active = ideasHandler.ideaId === idea.id;

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
          onClick={(e) => {
            activateIdea();
            e.stopPropagation();
          }}
        >
          <img
            className='pointer-events-none aspect-square h-[100px] w-[100px] flex-shrink-0 rounded-full border-[2px] border-slate-300'
            src={idea?.file?.src}
          />
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {idea.title} {idea.variant} {idea.file?.variant}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
