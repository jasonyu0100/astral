import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { useContext } from 'react';

export function SpacesLinkUrlSpotifyIdea() {
  const ideaObj = useContext(ContextForTaskLinkObj);

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
