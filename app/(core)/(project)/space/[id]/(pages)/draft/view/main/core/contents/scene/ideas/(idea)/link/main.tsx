import { UrlElemVariant } from '@/(server)/(model)/elements/url/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceDraftLinkSpotifyIdea } from './spotify/main';
import { SpaceDraftLinkYouTubeIdea } from './youtube/main';

export function SpaceDraftUrlIdea() {
  const star = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {star.urlElem?.variant === UrlElemVariant.SPOTIFY && (
        <SpaceDraftLinkSpotifyIdea />
      )}
      {star.urlElem?.variant === UrlElemVariant.YOUTUBE && (
        <SpaceDraftLinkYouTubeIdea />
      )}
    </>
  );
}
