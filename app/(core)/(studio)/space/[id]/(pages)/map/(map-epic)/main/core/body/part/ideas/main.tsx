import { motion } from 'framer-motion';
import { useContext, useRef } from 'react';
import { MapIdea } from './idea/main';
import { IdeaContext } from '@/(types)/model/map/part/idea/main';
import { IdeasHandlerContext } from '@/(types)/handler/ideas/main';

export function MapPartIdeas() {
  const ideasHandler = useContext(IdeasHandlerContext);
  const ideas = ideasHandler.ideas;
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className='absolute left-0 top-0 h-full w-full'
      ref={constraintsRef}
    >
      {ideas.map((idea) => (
        <IdeaContext.Provider value={idea} key={idea.id}>
          <MapIdea key={idea.id} constraintsRef={constraintsRef} />
        </IdeaContext.Provider>
      ))}
    </motion.div>
  );
}
