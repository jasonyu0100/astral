import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { useContext } from 'react';

export function SpacesLinkFileImageIdea() {
  const ideaObj = useContext(ContextForTaskLinkObj);

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
