import { FileElemVariant } from '@/(server)/model/elements/file/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';

export function SpacesMapFileIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <>
      {ideaObj.fileElem?.variant === FileElemVariant.IMAGE && (
        <img
          src={ideaObj.fileElem.src}
          alt={ideaObj.title}
          className='h-full w-full object-contain'
        />
      )}
    </>
  );
}
