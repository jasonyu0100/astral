import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../../controller/main';

export function SpacesChatSearchImageryItem() {
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const selected = generateSceneController.state.selectedIdeas;
  const index = useContext(ContextForIndexable);
  const imageryResult = useContext(ContextForIdeaObj);
  return (
    <div
      className='flex flex-col items-center space-y-[1rem]'
      onClick={() => {
        if (selected.includes(imageryResult)) {
          generateSceneController.actions.updateSelectedIdeas(
            selected.filter((idea) => idea !== imageryResult),
          );
        } else {
          generateSceneController.actions.updateSelectedIdeas([
            ...generateSceneController.state.selectedIdeas,
            imageryResult,
          ]);
        }
      }}
    >
      <img
        src={imageryResult.fileElem?.src}
        className={ctwn('aspect-square w-full', {
          'rounded border-[2px] border-blue-500':
            selected.includes(imageryResult),
        })}
      ></img>{' '}
      <div
        className={ctwn(
          'flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-slate-500',
          {
            'bg-blue-500': selected.includes(imageryResult),
          },
        )}
      >
        <p className='text-lg font-bold text-slate-300'>{index + 1}</p>
      </div>
    </div>
  );
}
