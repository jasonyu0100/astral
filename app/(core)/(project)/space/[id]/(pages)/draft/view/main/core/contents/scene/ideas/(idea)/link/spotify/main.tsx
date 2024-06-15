import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { ContextForMotionObj } from '@/(logic)/framer/(controller)/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForSceneIdeaMain } from '@/(server)/(controller)/space/chapter/scene/idea/main';
import { motion } from 'framer-motion';
import { useContext } from 'react';

export function SpaceDraftLinkSpotifyIdea() {
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
        className={`absolute flex aspect-[16/11] w-[300px] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <GlassAreaContainer
          name={SpaceDraftLinkSpotifyIdea.name}
          className='flex aspect-[16/8] h-full w-full flex-shrink-0 flex-col items-center justify-center'
          onClick={(e) => {
            sceneIdeaListController.actions.stateActions.select(idea);
            e.stopPropagation();
          }}
        >
          <iframe
            src={`${idea.linkElem?.url}?utm_source=generator`}
            width='100%'
            height='100%'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              {idea.title}
            </p>
          </div>
        </GlassAreaContainer>
      </motion.div>
    </>
  );
}
