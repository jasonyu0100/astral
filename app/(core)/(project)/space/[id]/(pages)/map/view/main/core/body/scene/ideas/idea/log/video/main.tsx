import { useContext } from 'react';
import { motion } from 'framer-motion';
import { LogElem, LogElemContext } from '@/(model)/elements/log/main';
import { FullLoomVideo } from '@/(components)/(loom)/full-video/main';
import { IdeasHandlerContext } from '@/(controller)/ideas/main';
import { IdeaHandlerContext } from '@/(controller)/ideas/idea/main';

export function LogVideoStar() {
  const { idea, x, y, constraintsRef, activateIdea } = useContext(
    IdeaHandlerContext,
  );
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
          <LogElemContext.Provider value={idea?.log || ({} as LogElem)}>
            <FullLoomVideo />
          </LogElemContext.Provider>
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
