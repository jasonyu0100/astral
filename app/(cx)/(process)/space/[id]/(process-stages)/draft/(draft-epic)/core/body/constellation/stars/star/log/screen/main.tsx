import { useContext } from 'react';
import { motion } from 'framer-motion';
import { StarHandlerContext } from '@/(logic)/internal/handler/draft/stars/star/main';
import { FullLoomVideo } from '@/(components)/(loom)/full-video/main';
import {
  LogObj,
  LogObjContext,
} from '@/(logic)/internal/model/resource/log/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/draft/stars/main';

export function LogScreenStar() {
  const { star, x, y, constraintsRef, activateStar } = useContext(
    StarHandlerContext,
  );
  const starsHandler = useContext(StarsHandlerContext);
  const active = starsHandler.starId === star.id;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex h-[150px] w-[300px] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <div
          className='flex h-full w-full flex-shrink-0 flex-col'
          onClick={(e) => {
            activateStar();
            e.stopPropagation();
          }}
        >
          <LogObjContext.Provider value={star?.log || ({} as LogObj)}>
            <FullLoomVideo />
          </LogObjContext.Provider>
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {star.title}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
