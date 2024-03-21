import { MutableRefObject, useContext } from 'react';
import {
  StarContext,
  StarVariant,
} from '@/(logic)/internal/model/draft/constellation/star/main';
import { FileStar } from './file/main';
import { LogStar } from './log/main';
import { LinkStar } from './link/main';
import { NoteStar } from './note/main';
import { StarHandlerContext } from '@/(logic)/internal/handler/stars/star/main';
import { useStarHandler } from '@/(logic)/internal/handler/stars/star/main';

export function DraftStar({
  constraintsRef,
}: {
  constraintsRef: MutableRefObject<null>;
}) {
  const star = useContext(StarContext);
  const starMotionContext = useStarHandler(star, constraintsRef);

  return (
    <StarHandlerContext.Provider value={starMotionContext}>
      {star.variant === StarVariant.FILE && <FileStar />}
      {star.variant === StarVariant.LOG && <LogStar />}
      {star.variant === StarVariant.LINK && <LinkStar />}
      {star.variant === StarVariant.NOTE && <NoteStar />}
    </StarHandlerContext.Provider>
  );
}
