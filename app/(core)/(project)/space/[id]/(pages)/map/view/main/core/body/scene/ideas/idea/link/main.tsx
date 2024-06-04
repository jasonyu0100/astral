import { useContext } from 'react';
import { IdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import { LinkVariant } from '@/(model)/media/resource/link/main';
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

