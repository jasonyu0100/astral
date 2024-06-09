import {
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { MutableRefObject, createContext, useMemo } from 'react';

export interface ContextForMotionObjInterface {
  x: MotionValue<number>;
  y: MotionValue<number>;
  constraintsRef: MutableRefObject<null>;
}

export const ContextForMotionObj = createContext({} as ContextForMotionObjInterface);

export const useControllerForMotionObj = (
  initialX: number,
  initialY: number,
  updateX: (x: number) => void,
  updateY: (y: number) => void,
  constraintsRef: MutableRefObject<null>,
) => {
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  useMemo(() => {
    x.set(initialX);
    y.set(initialY);
  }, []);

  useMotionValueEvent(x, 'animationStart', () => {
    console.log('animation started on x');
  });

  useMotionValueEvent(y, 'animationStart', () => {
    console.log('animation started on y');
  });

  useMotionValueEvent(x, 'change', (latest) => {
    updateX(latest);
  });

  useMotionValueEvent(y, 'change', (latest) => {
    updateY(latest);
  });

  return {
    x,
    y,
    constraintsRef,
  };
};
