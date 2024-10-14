import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';

export function SpacesMapUrlYouTubeIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

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
