import { MotionValue, useMotionValue, useMotionValueEvent } from "framer-motion";
import { MutableRefObject, createContext, useEffect } from "react";
import { StarHandler } from "../stars/main";
import { StarObj } from "@/(ouros)/(model)/draft/constellation/star/main";

export interface StarMotionProps {
  star: StarObj;
  x: MotionValue<number>;
  y: MotionValue<number>;
  constraintsRef: MutableRefObject<null>;
  activateStar: () => void;
}

export const StarMotionContext = createContext({} as StarMotionProps);

export const useStarMotion = (
  star: StarObj,
  starHandler: StarHandler,
  constraintsRef: MutableRefObject<null>,
): StarMotionProps => {
  const x = useMotionValue(star.x);
  const y = useMotionValue(star.y);

  function activateStar() {
    starHandler.activateStar(star.id);
  }

  function updateStar(data: any) {
    starHandler.updateStar(star.id, data);
  }

  useEffect(() => {
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
    constraintsRef,
  };
};