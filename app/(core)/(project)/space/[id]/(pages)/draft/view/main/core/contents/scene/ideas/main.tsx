import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { motion } from 'framer-motion';
import { useContext, useRef } from 'react';
import { SpaceDraftIdea } from './(idea)/main';

export function SpaceDraftSceneIdeas() {
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className='absolute left-0 top-0 h-full w-full'
      ref={constraintsRef}
    >
      {sceneIdeaListController.state.objs.map((idea) => (
        <ContextForSceneIdeaObj.Provider value={idea} key={idea.id}>
          <SpaceDraftIdea key={idea.id} constraintsRef={constraintsRef} />
        </ContextForSceneIdeaObj.Provider>
      ))}
    </motion.div>
  );
}
