import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ContextForSceneIdeaList } from '@/(model)/(controller)/space/chapter/scene/idea/list';

export function MapLinks() {
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);
  const ideas = sceneIdeaListController.state.objs;
  return (
    <motion.svg className='absolute left-0 top-0 h-full w-full'>
      {ideas.map((idea, i) => (
        <line
          key={idea.id}
          className='animate-pulse stroke-slate-300 stroke-[3px] opacity-30'
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
