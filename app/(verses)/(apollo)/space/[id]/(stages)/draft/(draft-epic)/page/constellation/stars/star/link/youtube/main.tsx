import { useContext } from 'react';
import { motion } from 'framer-motion';
import { StarMotionContext } from '@/(verses)/(handler)/draft/star/main';
import { DraftContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/page';

export function LinkYouTubeStar() {
  const { star, x, y, constraintsRef, activateStar } =
    useContext(StarMotionContext);
  const { starId } = useContext(DraftContext);
  const active = starId === star.id;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex w-[250px] aspect-[16/12] top-[${x}] left-[${y}]rounded-[5px] overflow-hidden`}
        style={{ x, y }}
      >
        <div
          className='flex h-full w-full aspect-[16/9] flex-shrink-0 flex-col'
          onDragStart={() => {
            activateStar();
          }}
        >
          <iframe
            onDrag={e => e.stopPropagation()}
            style={{width: '100%', height: '100%'}}
            src='https://www.youtube.com/embed/p22EqQBYRBM?si=xNdSEHNZlPh-S_xl'
            title='YouTube video player'
            allowfullscreen
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
        </div>
      </motion.div>
    </>
  );
}
