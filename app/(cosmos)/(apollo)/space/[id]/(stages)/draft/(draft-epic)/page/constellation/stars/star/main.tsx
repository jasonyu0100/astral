import { MutableRefObject, useEffect } from 'react';
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { StarObj } from '@/(ouros)/(model)/draft/constellation/star/main';

export function DraftStar({
  constraintsRef,
  star,
  updateStar,
}: {
  constraintsRef: MutableRefObject<null>;
  star: StarObj;
  updateStar: (star: Object) => void;
}) {
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
      className={`absolute flex h-[150px] w-[100px] flex-col items-center space-y-[1rem] p-[10px] top-[${x}] left-[${y}]`}
      style={{ x, y }}
    >
      <div className='h-[100px] w-[100px] flex-shrink-0'>
        <img
          className='pointer-events-none aspect-square w-full rounded-full border-[2px] border-slate-300'
          src={star?.file?.src}
        />
      </div>
      <p className='w-full text-center font-bold text-slate-300'>{star.title}</p>
    </motion.div>
  );
}
