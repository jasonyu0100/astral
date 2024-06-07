import { useContext } from 'react';
import { motion } from 'framer-motion';
import { IdeaHandlerContext } from '@/(model)/(controller)/(archive)/ideas/idea/main';
import { IdeasHandlerContext } from '@/(model)/(controller)/(archive)/ideas/main';

export function NoteStickyIdea() {
  const { idea, x, y, constraintsRef, activateIdea } =
    useContext(IdeaHandlerContext);
  const ideasHandler = useContext(IdeasHandlerContext);
  const active = ideasHandler.ideaId === idea.id;

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
            activateIdea();
            e.stopPropagation();
          }}
        >
          <div
            className='h-[full] w-[full] bg-yellow-400 p-[10px]'
            style={{ height: '100%' }}
          >
            <p>{idea.noteElem?.text}</p>
          </div>
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {idea.title}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
