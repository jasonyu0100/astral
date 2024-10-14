import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';

export function SpacesMapFileImageIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <>
      <img
        src={ideaObj?.fileElem?.src}
        alt={ideaObj.title}
        className='h-full w-full object-contain'
      />
    </>
  );
}
