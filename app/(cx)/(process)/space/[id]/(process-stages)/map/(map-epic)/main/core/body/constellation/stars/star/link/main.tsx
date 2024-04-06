import { useContext } from 'react';
import { StarContext } from '@/(logic)/internal/model/map/constellation/star/main';
import { LinkVariant } from '@/(logic)/internal/model/resource/link/main';
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

