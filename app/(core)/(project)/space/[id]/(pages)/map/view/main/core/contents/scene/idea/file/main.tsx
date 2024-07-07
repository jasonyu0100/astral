import { FileElemVariant } from '@/(server)/(model)/elements/file/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function SpaceMapFileIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {ideaObj.fileElem?.variant === FileElemVariant.IMAGE && (
        <div className='aspect-square h-full'>
          <img
            src={ideaObj.fileElem.src}
            alt={ideaObj.title}
            className='aspect-square w-full object-contain'
          />
        </div>
      )}
    </>
  );
}
