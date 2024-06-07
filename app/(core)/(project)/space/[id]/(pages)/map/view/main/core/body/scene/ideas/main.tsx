import { motion } from 'framer-motion';
import { useContext, useRef } from 'react';
import { MapIdea } from './idea/main';
import { ContextForSceneIdeaObj } from '@/(model)/space/chapter/scene/idea/main';
import { IdeasHandlerContext } from '@/(model)/(controller)/(archive)/ideas/main';

export function MapSceneIdeas() {
  const ideasHandler = useContext(IdeasHandlerContext);
  const ideas = ideasHandler.ideas;
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className='absolute left-0 top-0 h-full w-full'
      ref={constraintsRef}
    >
      {ideas.map((idea) => (
        <ContextForSceneIdeaObj.Provider value={idea} key={idea.id}>
          <MapIdea key={idea.id} constraintsRef={constraintsRef} />
        </ContextForSceneIdeaObj.Provider>
      ))}
    </motion.div>
  );
}
