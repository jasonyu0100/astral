import { useContext } from 'react';
import { StarContext } from '@/(lgx)/internal/model/map/constellation/star/main';
import { LinkVariant } from '@/(lgx)/internal/model/resource/link/main';
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

