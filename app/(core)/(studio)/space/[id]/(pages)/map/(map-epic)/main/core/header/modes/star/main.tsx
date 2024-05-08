import { useContext } from 'react';
import { MapHeaderStarCenter } from './center/main';
import { MapHeaderStarLeft } from './left/main';
import { MapHeaderStarRight } from './right/main';
import { StarContext, StarObj } from '@/(types)/model/map/constellation/star/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/stars/main';

export function MapHeaderStar() {
  const starsHandler = useContext(StarsHandlerContext);
  const starId = starsHandler.starId;
  const star = starsHandler.stars.find((star) => star.id === starId) || {};

  return (
    <StarContext.Provider value={star as StarObj}>
      <MapHeaderStarLeft />
      <MapHeaderStarCenter />
      <MapHeaderStarRight />
    </StarContext.Provider>
  );
}
