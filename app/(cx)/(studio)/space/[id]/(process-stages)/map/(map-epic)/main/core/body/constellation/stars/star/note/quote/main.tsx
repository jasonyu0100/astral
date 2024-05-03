import { useContext } from 'react';
import { motion } from 'framer-motion';
import { StarHandlerContext } from '@/(lgx)/internal/handler/stars/star/main';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';
import { StarsHandlerContext } from '@/(lgx)/internal/handler/stars/main';

export function NoteQuoteStar() {
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
        className={`absolute flex h-[300px] w-[300px] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <div
          className='flex h-[full] w-[full] flex-col items-center space-x-[1rem]'
          style={{ height: '100%' }}
          onClick={(e) => {
            activateStar();
            e.stopPropagation();
          }}
        >
          <div className='flex h-[200px] w-[300px] items-center justify-center bg-black p-3'>
            <p className="font-2xl text-white font-permanentMarker">{'"'}{star.note?.text}{'"'}</p>
          </div>
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {star.title} {star.variant} {star.note?.variant}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
