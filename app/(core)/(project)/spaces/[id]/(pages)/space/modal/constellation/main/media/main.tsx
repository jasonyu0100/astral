import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesSpaceSearchMediaContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);

  console.log(generateSceneController.state.videoResults);

  return (
    <div className='grid grid-cols-3 gap-[1rem]'>
      {generateSceneController.state.videoResults?.map((result) => (
        <iframe
          onDrag={(e) => e.stopPropagation()}
          style={{ width: '100%', height: '100%' }}
          src={`https://www.youtube.com/embed/${result.id.videoId}?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`}
          title='YouTube video player'
        />
      ))}
    </div>
  );
}
