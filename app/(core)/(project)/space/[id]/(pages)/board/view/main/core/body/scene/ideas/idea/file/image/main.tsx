import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ContextForMotionObj } from '@/(logic)/framer/(controller)/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForSceneIdeaMain } from '@/(server)/(controller)/space/chapter/scene/idea/main';

export function FileImageIdea() {
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
        className={`absolute flex aspect-[13/16] w-[160px] items-center top-[${x}] left-[${y}] bg-white`}
        style={{ x, y }}
      >
        <div
          className='flex h-full w-full flex-shrink-0 cursor-pointer flex-col  p-[10px] pb-[10px]'
          onClick={(e) => {
            e.stopPropagation();
            setTimeout(() => {
              sceneIdeaListController.actions.stateActions.select(idea);
            }, 300);
          }}
        >
          <img
            className='pointer-events-none aspect-square aspect-square w-full flex-shrink-0 border-[2px] border-slate-300'
            src={idea?.fileElem?.src}
          />
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-black'>
              {idea.title}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
