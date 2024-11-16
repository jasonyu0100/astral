import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../../controller/main';

export function SpacesChatSearchMediaItem() {
  const index = useContext(ContextForIndexable);
  const mediaResult = useContext(ContextForIdeaObj);
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const selected = generateSceneController.state.selectedIdeas;

  return (
    <div
      className='flex flex-col items-center space-y-[1rem]'
      onClick={() => {
        if (selected.includes(mediaResult)) {
          generateSceneController.actions.updateSelectedIdeas(
            selected.filter((idea) => idea !== mediaResult),
          );
        } else {
          generateSceneController.actions.updateSelectedIdeas([
            ...generateSceneController.state.selectedIdeas,
            mediaResult,
          ]);
        }
      }}
    >
      <iframe
        onDrag={(e) => e.stopPropagation()}
        className={ctwn('aspect-video w-full', {
          'rounded border-[2px] border-blue-500':
            selected.includes(mediaResult),
        })}
        style={{ objectFit: 'contain', width: '100%' }}
        src={mediaResult.urlElem?.url}
        title='YouTube video player'
      />
      <div
        className={ctwn(
          'flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-slate-400',
          {
            'bg-blue-500': selected.includes(mediaResult),
          },
        )}
      >
        <p className='text-lg font-bold text-slate-300'>{index + 1}</p>
      </div>
    </div>
  );
}
