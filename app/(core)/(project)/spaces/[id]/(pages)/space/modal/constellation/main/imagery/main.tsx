import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesSpaceSearchImageryContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='flex-shrink-0 text-lg font-bold text-slate-300'>
        Query: {generateSceneController.state.keywords}
      </p>
      <div className='grid w-full grid-cols-3'>
        {generateSceneController.state.imageResults.map((result) => (
          <img src={result.src}></img>
        ))}
      </div>
    </div>
  );
}
