import { LinkElemVariant } from '@/(server)/(model)/elements/link/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceBoardLinkSpotifyIdea } from './spotify/main';
import { SpaceBoardLinkYouTubeIdea } from './youtube/main';

export function SpaceBoardLinkIdea() {
  const star = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {star.linkElem?.variant === LinkElemVariant.SPOTIFY && (
        <SpaceBoardLinkSpotifyIdea />
      )}
      {star.linkElem?.variant === LinkElemVariant.YOUTUBE && (
        <SpaceBoardLinkYouTubeIdea />
      )}
    </>
  );
}
