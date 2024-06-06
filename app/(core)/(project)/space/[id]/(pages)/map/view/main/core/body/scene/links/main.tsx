import { motion } from 'framer-motion';
import { useContext } from 'react';
import { IdeasHandlerContext } from '@/(model)/(controller)/(archive)/ideas/main';

export function MapLinks() {
  const ideasHandler = useContext(IdeasHandlerContext);
  const ideas = ideasHandler.ideas
  return (
    <motion.svg className='absolute left-0 top-0 h-full w-full'>
      {ideas.map((idea, i) => (
        <line
          key={idea.id}
          className='stroke-slate-300 stroke-[3px] opacity-30 animate-pulse'
          x1={idea.x + 50}
          y1={idea.y + 60}
          x2={ideas[i === 0 ? 0 : i - 1].x + 50}
          y2={ideas[i === 0 ? 0 : i - 1].y + 60}
          stroke='#ffffff'
        />
      ))}
    </motion.svg>
  );
}
