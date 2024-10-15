import { UrlElemVariant } from '@/(server)/model/elements/url/main';
import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { useContext } from 'react';
import { SpacesLinkUrlSpotifyIdea } from './spotify/main';
import { SpacesLinkUrlYouTubeIdea } from './youtube/main';

export function SpacesLinkUrlIdea() {
  const ideaObj = useContext(ContextForTaskLinkObj);

  return (
    <div className='relative h-full w-full'>
      {ideaObj.urlElem?.variant === UrlElemVariant.YOUTUBE && (
        <SpacesLinkUrlYouTubeIdea />
      )}
      {ideaObj.urlElem?.variant === UrlElemVariant.SPOTIFY && (
        <SpacesLinkUrlSpotifyIdea />
      )}
    </div>
  );
}
