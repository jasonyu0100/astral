import { ContextForMotionObj } from '@/(logic)/framer/(controller)/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForSceneIdeaMain } from '@/(server)/(controller)/space/chapter/scene/idea/main';
import { motion } from 'framer-motion';
import { useContext } from 'react';

export function SpaceBoardNoteQuoteIdea() {
  const sceneIdeaMainController = useContext(ContextForSceneIdeaMain);
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);
  const { x, y, constraintsRef } = useContext(ContextForMotionObj);
  const idea = sceneIdeaMainController.state.obj;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex h-[300px] w-[300px] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <div
          className='flex h-[full] w-[full] flex-col items-center space-x-[1rem]'
          style={{ height: '100%' }}
          onClick={(e) => {
            sceneIdeaListController.actions.stateActions.select(idea);
            e.stopPropagation();
          }}
        >
          <div className='flex h-[200px] w-[300px] items-center justify-center bg-black p-3'>
            <p className='font-2xl font-permanentMarker text-white'>
              {'"'}
              {idea.noteElem?.text}
              {'"'}
            </p>
          </div>
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {idea.title} {idea.variant} {idea.noteElem?.variant}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
