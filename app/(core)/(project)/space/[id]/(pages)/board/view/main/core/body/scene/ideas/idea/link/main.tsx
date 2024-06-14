import { useContext } from 'react';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { LinkElemVariant } from '@/(server)/(model)/elements/link/main';
import { LinkSpotifyStar } from './spotify/main';
import { LinkYouTubeStar } from './youtube/main';

export function LinkIdea() {
  const star = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {star.linkElem?.variant === LinkElemVariant.SPOTIFY && (
        <LinkSpotifyStar />
      )}
      {star.linkElem?.variant === LinkElemVariant.YOUTUBE && (
        <LinkYouTubeStar />
      )}
    </>
  );
}
