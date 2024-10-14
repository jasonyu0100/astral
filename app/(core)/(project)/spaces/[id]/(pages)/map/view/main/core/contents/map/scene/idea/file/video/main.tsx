import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';

export function SpacesMapFileVideoIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <>
      <video
        src={ideaObj?.fileElem?.src}
        className='h-full w-full object-contain'
        controls
      />
    </>
  );
}
