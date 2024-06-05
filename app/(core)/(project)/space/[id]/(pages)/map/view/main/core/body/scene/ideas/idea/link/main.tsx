import { useContext } from 'react';
import { SceneIdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import { LinkVariant } from '@/(model)/concept/link/main';
import { LinkSpotifyStar } from './spotify/main';
import { LinkYouTubeStar } from './youtube/main';

export function LinkIdea() {
  const star = useContext(SceneIdeaContext);

  return (
    <>
      {star.link?.variant === LinkVariant.SPOTIFY && <LinkSpotifyStar />}
      {star.link?.variant === LinkVariant.YOUTUBE && <LinkYouTubeStar />}
    </>
  );
}

