import { MutableRefObject, useContext } from 'react';
import {
  StarContext,
  StarVariant,
} from '@/(logic)/internal/data/infra/model/draft/constellation/star/main';
import { FileStar } from './file/main';
import { LogStar } from './log/main';
import { LinkStar } from './link/main';
import { NoteStar } from './note/main';
import { ConstellationStarContext } from '@/(logic)/internal/handler/draft/star/main';
import { useStarMotion } from '@/(logic)/internal/handler/draft/star/main';

export function DraftStar({
  constraintsRef,
}: {
  constraintsRef: MutableRefObject<null>;
}) {
  const star = useContext(StarContext);
  const starMotionContext = useStarMotion(star, constraintsRef);

  return (
    <ConstellationStarContext.Provider value={starMotionContext}>
      {star.variant === StarVariant.FILE && <FileStar />}
      {star.variant === StarVariant.LOG && <LogStar />}
      {star.variant === StarVariant.LINK && <LinkStar />}
      {star.variant === StarVariant.NOTE && <NoteStar />}
    </ConstellationStarContext.Provider>
  );
}
