import { motion } from 'framer-motion';
import { useContext } from 'react';
import { StarsHandlerContext } from '@/(logic)/internal/handler/draft/stars/main';

export function DraftLinks() {
  const starsHandler = useContext(StarsHandlerContext);
  const stars = starsHandler.stars
  return (
    <motion.svg className='absolute left-0 top-0 h-full w-full'>
      {stars.map((star, i) => (
        <line
          key={star.id}
          className='stroke-slate-500 stroke-[1px] opacity-30'
          x1={star.x + 50}
          y1={star.y + 60}
          x2={stars[i === 0 ? 0 : i - 1].x + 50}
          y2={stars[i === 0 ? 0 : i - 1].y + 60}
          stroke='#ffffff'
        />
      ))}
    </motion.svg>
  );
}
