import { useContext } from 'react';
import { motion } from 'framer-motion';
import { StarHandlerContext } from '@/(logic)/internal/handler/stars/star/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/stars/main';
import { effectStyles } from '@/(design)/(styles)/data';

export function NotePromptStar() {
  const user = useGlobalUser((state) => state.user);
  const { star, x, y, constraintsRef, activateStar } =
    useContext(StarHandlerContext);
  const starsHandler = useContext(StarsHandlerContext);
  const active = starsHandler.starId === star.id;

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
            activateStar();
            e.stopPropagation();
          }}
        >
          <div
            className='flex h-[full] w-[full] flex-row items-center space-x-[1rem]'
            style={{ height: '100%' }}
          >
            <img
              src={'/brand/icon-bg-sm.png'}
              className={`h-[50px] w-[50px] rounded-full ${effectStyles['glow-md']}`}
            />
            <div className='w-[300px] rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-3 font-regular text-white'>
              {star.note?.text}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
