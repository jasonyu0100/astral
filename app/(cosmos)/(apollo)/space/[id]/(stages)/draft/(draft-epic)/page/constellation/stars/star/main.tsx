import { MutableRefObject, createContext, useContext, useEffect } from 'react';
import {
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import {
  StarContext,
  StarObj,
  StarVariant,
} from '@/(ouros)/(model)/draft/constellation/star/main';
import { FileStar } from './file/main';
import { LogStar } from './log/main';
import { LinkStar } from './link/main';
import { NoteStar } from './note/main';
import { DraftContext } from '../../../../../page';
import { StarMotionContext } from '@/(cosmos)/(handler)/draft/star/main';
import { useStarMotion } from '@/(cosmos)/(handler)/draft/star/main';

export function DraftStar({
  constraintsRef,
}: {
  constraintsRef: MutableRefObject<null>;
}) {
  const { starHandler } = useContext(DraftContext);
  const star = useContext(StarContext);
  const starMotionContext = useStarMotion(star, starHandler, constraintsRef);

  return (
    <StarMotionContext.Provider value={starMotionContext}>
      {star.variant === StarVariant.FILE && <FileStar />}
      {star.variant === StarVariant.LOG && <LogStar />}
      {star.variant === StarVariant.LINK && <LinkStar />}
      {star.variant === StarVariant.NOTE && <NoteStar />}
    </StarMotionContext.Provider>
  );
}
