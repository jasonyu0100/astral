import { FileElemVariant } from '@/(server)/(model)/elements/file/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function SpaceMapFileIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {ideaObj.fileElem?.variant === FileElemVariant.IMAGE && (
        <div
          className='aspect-[11/13] h-full bg-white shadow-lg'
          style={{ padding: '10%' }}
        >
          <img
            src={ideaObj.fileElem.src}
            alt={ideaObj.title}
            className='aspect-square w-full object-cover'
          />
        </div>
      )}
    </>
  );
}
