import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';

export function SpacesMapUrlSpotifyIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <>
      <iframe
        src={ideaObj.urlElem?.url}
        style={{ objectFit: 'contain' }}
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      />
    </>
  );
}
