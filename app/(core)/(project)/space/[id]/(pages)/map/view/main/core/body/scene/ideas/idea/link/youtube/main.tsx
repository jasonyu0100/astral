import { useContext } from 'react';
import { motion } from 'framer-motion';
import { IdeaHandlerContext } from '@/(controller)/ideas/idea/main';
import { IdeasHandlerContext } from '@/(controller)/ideas/main';

export function LinkYouTubeStar() {
  const { idea, x, y, constraintsRef, activateIdea } =
    useContext(IdeaHandlerContext);
  const ideasHandler = useContext(IdeasHandlerContext);
  const active = ideasHandler.ideaId === idea.id;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex aspect-[16/12] w-[250px] top-[${x}] left-[${y}]rounded-[5px] overflow-hidden`}
        style={{ x, y }}
      >
        <div
          className='flex aspect-[16/9] h-full w-full flex-shrink-0 flex-col'
          onClick={(e) => {
            activateIdea();
            e.stopPropagation();
          }}
        >
          <iframe
            onDrag={(e) => e.stopPropagation()}
            style={{ width: '100%', height: '100%' }}
            src={`${idea.link?.url}?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`}
            title='YouTube video player'
          ></iframe>
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
