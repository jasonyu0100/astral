import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ConstellationStarContext } from '@/(logic)/internal/handler/draft/star/main';
import { DraftContext } from '@/(cx)/(process)/space/[id]/(process-stages)/draft/page';
import { FullLoomVideo } from '@/(components)/(loom)/full-video/main';
import { LogObj, LogObjContext } from '@/(logic)/internal/data/infra/model/resource/log/main';

export function LogAudioStar() {
  const { star, x, y, constraintsRef, activateStar } =
    useContext(ConstellationStarContext);
  const { starId } = useContext(DraftContext);
  const active = starId === star.id;

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
