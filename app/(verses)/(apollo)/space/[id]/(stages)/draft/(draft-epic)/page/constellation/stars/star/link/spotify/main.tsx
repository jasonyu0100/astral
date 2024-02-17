import { useContext } from 'react';
import { motion } from 'framer-motion';
import { StarMotionContext } from '@/(verses)/(handler)/draft/star/main';
import { DraftContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/page';
import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';

export function LinkSpotifyStar() {
  const { star, x, y, constraintsRef, activateStar } =
    useContext(StarMotionContext);
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
        <Layer
          className='flex aspect-[16/8] h-full w-full flex-shrink-0 flex-col items-center justify-center'
          onDragStart={() => {
            activateStar();
          }}
        >
          <iframe
            src='https://open.spotify.com/embed/track/14I47nVJiJt9NCzt7YmnWz?utm_source=generator'
            width='100%'
            height='100%'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
          {/* <iframe
            width='560'
            height='315'
            src={star.link.url}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe> */}
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {star.title} {star.variant} {star.file?.variant}
            </p>
          </div>
        </Layer>
      </motion.div>
    </>
  );
}
