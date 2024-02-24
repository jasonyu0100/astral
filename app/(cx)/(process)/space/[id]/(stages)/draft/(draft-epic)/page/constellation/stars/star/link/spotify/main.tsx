import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ConstellationStarContext } from '@/(logic)/handler/draft/star/main';
import { DraftContext } from '@/(cx)/(process)/space/[id]/(stages)/draft/page';
import { Glass } from '@/(components)/glass/main';
import { backgroundStyles } from '@/(components)/styles/data';

export function LinkSpotifyStar() {
  const { star, x, y, constraintsRef, activateStar } =
    useContext(ConstellationStarContext);
  const { starId } = useContext(DraftContext);
  const active = starId === star.id;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex aspect-[16/11] w-[300px] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <Glass
          displayName={LinkSpotifyStar.name}
          className='flex aspect-[16/8] h-full w-full flex-shrink-0 flex-col items-center justify-center'
          onClick={(e) => {
            activateStar();
            e.stopPropagation();
          }}
        >
          <iframe
            src='https://open.spotify.com/embed/track/14I47nVJiJt9NCzt7YmnWz?utm_source=generator'
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
        </Glass>
      </motion.div>
    </>
  );
}
