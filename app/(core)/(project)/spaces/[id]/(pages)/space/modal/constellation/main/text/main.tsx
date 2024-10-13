import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesSpaceSearchTextContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);

  return (
    <div className='grid w-full grid-cols-5 gap-[2rem]'>
      {generateSceneController.state.stickies.map((sticky, index) => (
        <div className='aspect-square bg-yellow-500 p-[1rem]'>
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
