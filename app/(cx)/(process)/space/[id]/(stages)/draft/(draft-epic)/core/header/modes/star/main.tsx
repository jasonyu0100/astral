import { useContext } from 'react';
import { DraftContext } from '../../../../../page';
import { DraftHeaderStarCenter } from './center/main';
import { DraftHeaderStarLeft } from './left/main';
import { DraftHeaderStarRight } from './right/main';
import { StarContext, StarObj } from '@/(logic)/internal/data/infra/model/draft/constellation/star/main';

export function DraftHeaderStar() {
  const draftContext = useContext(DraftContext);
  const starId = draftContext.starId;
  const star = draftContext.stars.find((star) => star.id === starId) || {};

  return (
    <StarContext.Provider value={star as StarObj}>
      <DraftHeaderStarLeft />
      <DraftHeaderStarCenter />
      <DraftHeaderStarRight />
    </StarContext.Provider>
  );
}
