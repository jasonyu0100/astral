import { FileElemVariant } from '@/(server)/model/elements/file/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function SpacesMapFileIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

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
