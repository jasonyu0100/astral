import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { useContext } from 'react';

export function SpacesLinkFileAudioIdea() {
  const ideaObj = useContext(ContextForTaskLinkObj);

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
