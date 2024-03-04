import {
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { MutableRefObject, createContext, useContext, useMemo } from 'react';
import { DraftContext, DraftModalType } from '@/(cx)/(process)/space/[id]/(process-stages)/draft/page';
import { StarObj } from '@/(logic)/internal/data/infra/model/draft/constellation/star/main';

export interface StarHandler {
  star: StarObj;
  x: MotionValue<number>;
  y: MotionValue<number>;
  constraintsRef: MutableRefObject<null>;
  activateStar: () => void;
  deactivateStar: () => void;
}

export const StarHandlerContext = createContext({} as StarHandler);

export const useStarHandler = (
  star: StarObj,
  constraintsRef: MutableRefObject<null>,
) => {
  const { starHandler, updateModalType } = useContext(DraftContext);
  const x = useMotionValue(star.x);
  const y = useMotionValue(star.y);

  function activateStar() {
    starHandler.activateStar(star.id);
    updateModalType(DraftModalType.STAR)
  }

  function deactivateStar() {
    starHandler.deactivateStar();
  }

  function updateStar(data: any) {
    starHandler.updateStar(star.id, data);
  }

  useMemo(() => {
    x.set(star.x);
    y.set(star.y);
  }, [star]);

  useMotionValueEvent(x, 'animationStart', () => {
    console.log('animation started on x');
  });

  useMotionValueEvent(x, 'change', (latest) => {
    updateStar({ x: latest });
  });

  useMotionValueEvent(y, 'animationStart', () => {
    console.log('animation started on y');
  });

  useMotionValueEvent(y, 'change', (latest) => {
    updateStar({ y: latest });
  });

  return {
    star,
    x,
    y,
    activateStar,
    deactivateStar,
    constraintsRef,
  };
};
