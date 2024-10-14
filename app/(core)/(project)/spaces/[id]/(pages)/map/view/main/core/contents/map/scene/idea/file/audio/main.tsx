import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';

export function SpacesMapFileAudioIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <>
      <audio
        src={ideaObj?.fileElem?.src}
        className='h-full w-full object-contain'
        controls
      />
    </>
  );
}
