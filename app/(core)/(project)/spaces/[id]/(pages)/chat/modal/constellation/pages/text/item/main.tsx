import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../../controller/main';

export function SpacesChatGenerateTextItem() {
  const index = useContext(ContextForIndexable);
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const selected = generateSceneController.state.selectedIdeas;
  const textResult = useContext(ContextForIdeaObj);

  return (
    <div
      className='flex flex-col items-center space-y-[1rem]'
      onClick={() => {
        if (selected.includes(textResult)) {
          generateSceneController.actions.updateSelectedIdeas(
            selected.filter((idea) => idea !== textResult),
          );
        } else {
          generateSceneController.actions.updateSelectedIdeas([
            ...generateSceneController.state.selectedIdeas,
            textResult,
          ]);
        }
      }}
    >
      <div
        className={ctwn('aspect-square cursor-pointer bg-yellow-500 p-[1rem]', {
          'rounded border-[2px] border-blue-500': selected.includes(textResult),
        })}
        onClick={() => {
          if (selected.includes(textResult)) {
            generateSceneController.actions.updateSelectedIdeas(
              selected.filter((idea) => idea !== textResult),
            );
          } else {
            generateSceneController.actions.updateSelectedIdeas([
              ...generateSceneController.state.selectedIdeas,
              textResult,
            ]);
          }
        }}
      >
        <p className='h-full w-full font-bold'>{textResult.textElem?.text}</p>
      </div>
      <div
        className={ctwn(
          'flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-slate-500',
          {
            'bg-blue-500': selected.includes(textResult),
          },
        )}
      >
        <p className='text-lg font-bold text-slate-300'>{index + 1}</p>
      </div>
    </div>
  );
}
