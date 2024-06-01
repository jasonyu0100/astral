import { useContext } from 'react';
import { motion } from 'framer-motion';
import { IdeaHandlerContext } from '@/(types)/handler/ideas/idea/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { IdeasHandlerContext } from '@/(types)/handler/ideas/main';

export function NoteQuoteIdea() {
  const user = useGlobalUser((state) => state.user);
  const { idea, x, y, constraintsRef, activateIdea } =
    useContext(IdeaHandlerContext);
  const ideasHandler = useContext(IdeasHandlerContext);
  const active = ideasHandler.ideaId === idea.id;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex h-[300px] w-[300px] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <div
          className='flex h-[full] w-[full] flex-col items-center space-x-[1rem]'
          style={{ height: '100%' }}
          onClick={(e) => {
            activateIdea();
            e.stopPropagation();
          }}
        >
          <div className='flex h-[200px] w-[300px] items-center justify-center bg-black p-3'>
            <p className="font-2xl text-white font-permanentMarker">{'"'}{idea.note?.text}{'"'}</p>
          </div>
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {idea.title} {idea.variant} {idea.note?.variant}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
