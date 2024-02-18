import { useContext } from 'react';
import { motion } from 'framer-motion';
import { StarMotionContext } from '@/(verses)/(handler)/draft/star/main';
import { DraftContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/page';
import { useGlobalUser } from '@/(store)/user/main';

export function NotePromptStar() {
  const user = useGlobalUser((state) => state.user);
  const { star, x, y, constraintsRef, activateStar } =
    useContext(StarMotionContext);
  const { starId } = useContext(DraftContext);
  const active = starId === star.id;

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
          onDragStart={() => {
            activateStar();
          }}
        >
          <div
            className='h-[full] w-[full] flex flex-row items-center space-x-[1rem]'
            style={{ height: '100%' }}
          >
            <img
              src={"/brand/icon-bg-sm.png"}
              className='h-[50px] w-[50px] rounded-full'
            />
            <div className='rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-3 font-regular text-white w-[300px]'>
              {star.note?.text}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
