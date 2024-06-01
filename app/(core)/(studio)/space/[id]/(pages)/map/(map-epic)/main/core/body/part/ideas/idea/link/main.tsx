import { useContext } from 'react';
import { IdeaContext } from '@/(types)/model/map/part/idea/main';
import { LinkVariant } from '@/(types)/model/resource/link/main';
import { LinkSpotifyStar } from './spotify/main';
import { LinkYouTubeStar } from './youtube/main';

export function LinkIdea() {
  const star = useContext(IdeaContext);

  return (
    <>
      {star.link?.variant === LinkVariant.SPOTIFY && <LinkSpotifyStar />}
      {star.link?.variant === LinkVariant.YOUTUBE && <LinkYouTubeStar />}
    </>
  );
}

