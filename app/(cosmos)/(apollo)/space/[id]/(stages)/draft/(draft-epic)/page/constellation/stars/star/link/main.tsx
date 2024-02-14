import { useContext } from 'react';
import { StarContext } from '@/(ouros)/(model)/draft/constellation/star/main';
import { LinkVariant } from '@/(ouros)/(model)/resource/link/main';
import { LinkSpotifyStar } from './spotify/main';
import { LinkYouTubeStar } from './youtube/main';

export function LinkStar() {
  const star = useContext(StarContext);

  return (
    <>
      {star.link?.variant === LinkVariant.SPOTIFY && <LinkSpotifyStar />}
      {star.link?.variant === LinkVariant.YOUTUBE && <LinkYouTubeStar />}
    </>
  );
}

