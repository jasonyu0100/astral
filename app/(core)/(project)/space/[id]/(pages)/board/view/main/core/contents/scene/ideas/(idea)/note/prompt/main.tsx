import { ContextForMotionObj } from '@/(logic)/framer/(controller)/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForSceneIdeaMain } from '@/(server)/(controller)/space/chapter/scene/idea/main';
import { effectFx } from '@/(style)/data';
import { motion } from 'framer-motion';
import { useContext } from 'react';

export function SpaceBoardNotePromptIdea() {
  const sceneIdeaMainController = useContext(ContextForSceneIdeaMain);
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);
  const { x, y, constraintsRef } = useContext(ContextForMotionObj);
  const idea = sceneIdeaMainController.state.obj;
  const active = sceneIdeaListController.actions.stateActions.checkActive(idea);

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex h-[100px] w-[400px] top-[${x}] left-[${y}]`}
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
            className='flex h-[full] w-[full] flex-row items-center space-x-[1rem]'
            style={{ height: '100%' }}
          >
            <img
              src={'/brand/icon-bg-sm.png'}
              className={`h-[50px] w-[50px] rounded-full ${effectFx['glow-md']}`}
            />
            <div className='w-[300px] rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-3 font-regular text-white'>
              {idea.noteElem?.text}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
