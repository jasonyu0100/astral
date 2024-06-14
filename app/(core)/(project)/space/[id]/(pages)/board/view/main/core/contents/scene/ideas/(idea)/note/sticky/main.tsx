import { ContextForMotionObj } from '@/(logic)/framer/(controller)/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForSceneIdeaMain } from '@/(server)/(controller)/space/chapter/scene/idea/main';
import { motion } from 'framer-motion';
import { useContext } from 'react';

export function SpaceBoardNoteStickyIdea() {
  const sceneIdeaMainController = useContext(ContextForSceneIdeaMain);
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);
  const { x, y, constraintsRef } = useContext(ContextForMotionObj);
  const idea = sceneIdeaMainController.state.obj;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex aspect-[14/16] w-[150px] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <div
          className='flex h-full w-full flex-shrink-0 flex-col'
          onClick={(e) => {
            sceneIdeaListController.actions.stateActions.select(idea);
            e.stopPropagation();
          }}
        >
          <div
            className='h-[full] w-[full] bg-yellow-400 p-[10px]'
            style={{ height: '100%' }}
          >
            <p>{idea.noteElem?.text}</p>
          </div>
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {idea.title}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
