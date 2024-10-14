import { UrlElemVariant } from '@/(server)/model/elements/url/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';
import { SpacesMapUrlSpotifyIdea } from './spotify/main';
import { SpacesMapUrlYouTubeIdea } from './youtube/main';

export function SpacesMapUrlIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <div className='relative h-full w-full'>
      {ideaObj.urlElem?.variant === UrlElemVariant.YOUTUBE && (
        <SpacesMapUrlYouTubeIdea />
      )}
      {ideaObj.urlElem?.variant === UrlElemVariant.SPOTIFY && (
        <SpacesMapUrlSpotifyIdea />
      )}
    </div>
  );
}
