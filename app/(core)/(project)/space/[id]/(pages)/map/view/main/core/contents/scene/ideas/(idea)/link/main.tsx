import { UrlElemVariant } from '@/(server)/(model)/elements/url/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceMapLinkSpotifyIdea } from './spotify/main';
import { SpaceMapLinkYouTubeIdea } from './youtube/main';

export function SpaceMapUrlIdea() {
  const star = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {star.urlElem?.variant === UrlElemVariant.SPOTIFY && (
        <SpaceMapLinkSpotifyIdea />
      )}
      {star.urlElem?.variant === UrlElemVariant.YOUTUBE && (
        <SpaceMapLinkYouTubeIdea />
      )}
    </>
  );
}
