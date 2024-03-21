import { useContext } from 'react';
import { DraftHeaderStarCenter } from './center/main';
import { DraftHeaderStarLeft } from './left/main';
import { DraftHeaderStarRight } from './right/main';
import { StarContext, StarObj } from '@/(logic)/internal/model/draft/constellation/star/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/stars/main';

export function DraftHeaderStar() {
  const starsHandler = useContext(StarsHandlerContext);
  const starId = starsHandler.starId;
  const star = starsHandler.stars.find((star) => star.id === starId) || {};

  return (
    <StarContext.Provider value={star as StarObj}>
      <DraftHeaderStarLeft />
      <DraftHeaderStarCenter />
      <DraftHeaderStarRight />
    </StarContext.Provider>
  );
}
