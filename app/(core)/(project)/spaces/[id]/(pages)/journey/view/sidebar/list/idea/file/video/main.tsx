import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { useContext } from 'react';

export function SpacesLinkFileVideoIdea() {
  const ideaObj = useContext(ContextForTaskLinkObj);

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
