import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ContextForSceneIdeaMain } from '@/(server)/(controller)/space/chapter/scene/idea/main';
import { ContextForMotionObj } from '@/(logic)/framer/(controller)/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';

export function FileAudioIdea() {
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
        className={`absolute flex h-[150px] w-[100px] top-[${x}] left-[${y}]`}
        style={{ x, y }}
      >
        <div
          className='flex h-full w-full flex-shrink-0 flex-col'
          onClick={(e) => {
            sceneIdeaListController.actions.stateActions.select(
              sceneIdeaMainController.state.obj,
            );
            e.stopPropagation();
          }}
        >
          <div
            className='flex aspect-square h-[100px] w-[100px] cursor-pointer items-center justify-center bg-black shadow-md'
            onClick={(e) => {
              e.stopPropagation();
              const audio = document.getElementById(
                'file-upload-audio',
              ) as HTMLAudioElement;
              audio.play();
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-1/2 w-1/2'
              viewBox='0 0 24 24'
              fill='none'
            >
              <mask
                id='mask0_3134_7'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='24'
                height='24'
              >
                <rect width='24' height='24' fill='#D9D9D9' />
              </mask>
              <g mask='url(#mask0_3134_7)'>
                <path
                  d='M10 21C8.9 21 7.95833 20.6083 7.175 19.825C6.39167 19.0417 6 18.1 6 17C6 15.9 6.39167 14.9583 7.175 14.175C7.95833 13.3917 8.9 13 10 13C10.3833 13 10.7375 13.0458 11.0625 13.1375C11.3875 13.2292 11.7 13.3667 12 13.55V3H18V7H14V17C14 18.1 13.6083 19.0417 12.825 19.825C12.0417 20.6083 11.1 21 10 21Z'
                  fill='#CBD5E1'
                />
              </g>
            </svg>
            <audio
              id='file-upload-audio'
              src={sceneIdeaMainController.state.obj.fileElem?.src}
              className='aspect-square h-[100px] bg-black object-cover shadow-md'
            />
          </div>
          <div className='flex h-[50px] items-center'>
            <p className='w-full text-center font-bold text-slate-300'>
              src={sceneIdeaMainController.state.obj.fileElem?.title}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
