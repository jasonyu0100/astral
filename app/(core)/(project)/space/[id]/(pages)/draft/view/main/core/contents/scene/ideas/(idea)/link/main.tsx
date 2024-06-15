import { LinkElemVariant } from '@/(server)/(model)/elements/link/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceDraftLinkSpotifyIdea } from './spotify/main';
import { SpaceDraftLinkYouTubeIdea } from './youtube/main';

export function SpaceDraftLinkIdea() {
  const star = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {star.linkElem?.variant === LinkElemVariant.SPOTIFY && (
        <SpaceDraftLinkSpotifyIdea />
      )}
      {star.linkElem?.variant === LinkElemVariant.YOUTUBE && (
        <SpaceDraftLinkYouTubeIdea />
      )}
    </>
  );
}
