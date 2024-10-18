import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { useContext } from 'react';

export function SpacesLinkUrlYouTubeIdea() {
  const ideaObj = useContext(ContextForTaskLinkObj);

  return (
    <>
      <iframe
        src={ideaObj.urlElem?.url}
        title='YouTube video player'
        style={{ objectFit: 'contain' }}
        allowFullScreen
      />
    </>
  );
}
