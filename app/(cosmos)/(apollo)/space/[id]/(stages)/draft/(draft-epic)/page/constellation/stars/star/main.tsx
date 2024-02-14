import { MutableRefObject, useContext, useEffect } from 'react';
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { StarContext, StarObj, StarVariant } from '@/(ouros)/(model)/draft/constellation/star/main';
import { FileStar } from './file/main';
import { LogStar } from './log/main';
import { LinkStar } from './link/main';
import { NoteStar } from './note/main';

export function DraftStar({
  constraintsRef,
  updateStar,
  activateStar: clickStar,
}: {
  constraintsRef: MutableRefObject<null>;
  updateStar: (star: Object) => void;
  activateStar: () => void;
}) {
  const star = useContext(StarContext);
  const x = useMotionValue(star.x);
  const y = useMotionValue(star.y);

  useEffect(() => {
    x.set(star.x);
    y.set(star.y);
  }, [star]);

  useMotionValueEvent(x, 'animationStart', () => {
    console.log('animation started on x');
  });

  useMotionValueEvent(x, 'change', (latest) => {
    updateStar({ x: latest });
  });

  useMotionValueEvent(y, 'animationStart', () => {
    console.log('animation started on y');
  });

  useMotionValueEvent(y, 'change', (latest) => {
    updateStar({ y: latest });
  });

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      className={`absolute flex h-[150px] w-[100px] flex-col items-center top-[${x}] left-[${y}]`}
      style={{ x, y }}
    >
      <div
        className='flex h-full w-full flex-shrink-0 flex-col'
        onDragStart={() => {
          clickStar();
        }}
      >
        {star.variant === StarVariant.FILE && <FileStar />}
        {star.variant === StarVariant.LOG && <LogStar />}
        {star.variant === StarVariant.LINK && <LinkStar />}
        {star.variant === StarVariant.NOTE && <NoteStar />}
      </div>
    </motion.div>
  );
}
