import { useContext } from 'react';
import { motion } from 'framer-motion';
import { StarHandlerContext } from '@/(lgx)/internal/handler/stars/star/main';
import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { StarsHandlerContext } from '@/(lgx)/internal/handler/stars/main';

export function LinkSpotifyStar() {
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
        className={`absolute flex aspect-[16/11] w-[300px] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <GlassAreaContainer
          name={LinkSpotifyStar.name}
          className='flex aspect-[16/8] h-full w-full flex-shrink-0 flex-col items-center justify-center'
          onClick={(e) => {
            activateStar();
            e.stopPropagation();
          }}
        >
          <iframe
            src={`${star.link?.url}?utm_source=generator`}
            width='100%'
            height='100%'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {star.title}
            </p>
          </div>
        </GlassAreaContainer>
      </motion.div>
    </>
  );
}
