import { useContext } from 'react';
import { SceneIdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import { LinkElemVariant } from '@/(model)/elements/link/main';
import { LinkSpotifyStar } from './spotify/main';
import { LinkYouTubeStar } from './youtube/main';

export function LinkIdea() {
  const star = useContext(SceneIdeaContext);

  return (
    <>
      {star.link?.variant === LinkElemVariant.SPOTIFY && <LinkSpotifyStar />}
      {star.link?.variant === LinkElemVariant.YOUTUBE && <LinkYouTubeStar />}
    </>
  );
}

