import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesChatSearchTextContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const selected = generateSceneController.state.selectedIdeas;

  return (
    <div className='grid w-full grid-cols-5 gap-[2rem]'>
      {generateSceneController.state.textResults.map((sticky, index) => (
        <div
          className={ctwn(
            'aspect-square cursor-pointer bg-yellow-500 p-[1rem]',
            {
              'border-blue-500': selected,
            },
          )}
          onClick={() => {
            generateSceneController.actions.updateSelectedIdeas([
              ...generateSceneController.state.selectedIdeas,
              generateSceneController.state.textResults[index],
            ]);
          }}
        >
          <textarea
            className='h-full w-full resize-none bg-transparent font-bold outline-none'
            value={sticky}
            onChange={(e) =>
              generateSceneController.actions.editSticky(index, e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
}
