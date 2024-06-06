import { useContext } from 'react';
import { motion } from 'framer-motion';
import { IdeaHandlerContext } from '@/(model)/(controller)/(archive)/ideas/idea/main';
import { IdeasHandlerContext } from '@/(model)/(controller)/(archive)/ideas/main';

export function FileVideoIdea() {
  const { idea, x, y, constraintsRef, activateIdea } =
    useContext(IdeaHandlerContext);
  const ideasHandler = useContext(IdeasHandlerContext);
  const active = ideasHandler.ideaId === idea.id;

  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`absolute flex aspect-[16/12] w-[250px] top-[${x}] left-[${y}]rounded-[5px] overflow-hidden`}
        style={{ x, y }}
      >
        <div
          className='flex aspect-[16/9] h-full w-full flex-shrink-0 flex-col'
          onClick={(e) => {
            e.stopPropagation();
            activateIdea();
            const video = document.getElementById(
              `file-upload-audio-${idea.file?.id}`,
            ) as HTMLVideoElement;
            video.play();
          }}
        >
          <video
            id={`file-upload-audio-${idea.file?.id}`}
            onDrag={(e) => e.stopPropagation()}
            style={{ width: '100%', height: '100%' }}
            src={idea.file?.src}
            title='YouTube video player'
          ></video>
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
