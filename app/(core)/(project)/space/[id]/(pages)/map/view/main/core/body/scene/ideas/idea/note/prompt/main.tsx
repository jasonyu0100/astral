import { useContext } from 'react';
import { motion } from 'framer-motion';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { IdeasHandlerContext } from '@/(model)/(controller)/(archive)/ideas/main';
import { effectFx } from '@/(style)/data';
import { IdeaHandlerContext } from '@/(model)/(controller)/(archive)/ideas/idea/main';

export function NotePromptIdea() {
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
        className={`absolute flex h-[100px] w-[400px] top-[${x}] left-[${y}]`}
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
            className='flex h-[full] w-[full] flex-row items-center space-x-[1rem]'
            style={{ height: '100%' }}
          >
            <img
              src={'/brand/icon-bg-sm.png'}
              className={`h-[50px] w-[50px] rounded-full ${effectFx['glow-md']}`}
            />
            <div className='w-[300px] rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-3 font-regular text-white'>
              {idea.note?.text}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
