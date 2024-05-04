import {
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { MutableRefObject, createContext, useContext, useMemo } from 'react';
import { MapContext, MapModalType } from '@/(cx)/(studio)/space/[id]/(pages)/map/page';
import { StarObj } from '@/(types)/model/map/constellation/star/main';
import { StarsHandlerContext } from '../main';

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
  const starsHandler = useContext(StarsHandlerContext);
  const { updateModalType } = useContext(MapContext);
  const x = useMotionValue(star.x);
  const y = useMotionValue(star.y);

  function activateStar() {
    starsHandler.starActions.activateStar(star.id);
    updateModalType(MapModalType.STAR)
  }

  function deactivateStar() {
    starsHandler.starActions.deactivateStar();
  }

  function updateStar(data: any) {
    starsHandler.starActions.updateStar(star.id, data);
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
