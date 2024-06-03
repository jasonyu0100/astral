import {
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { MutableRefObject, createContext, useContext, useMemo } from 'react';
import { MapContext, MapModalType } from '@/(core)/(project)/space/[id]/(pages)/map/page';
import { IdeaObj } from '@/(model)/map/part/idea/main';
import { IdeasHandlerContext } from '../main';

export interface IdeaHandler {
  idea: IdeaObj;
  x: MotionValue<number>;
  y: MotionValue<number>;
  constraintsRef: MutableRefObject<null>;
  activateIdea: () => void;
  deactivateIdea: () => void;
}

export const IdeaHandlerContext = createContext({} as IdeaHandler);

export const useIdeaHandler = (
  idea: IdeaObj,
  constraintsRef: MutableRefObject<null>,
) => {
  const ideasHandler = useContext(IdeasHandlerContext);
  const { updateModalType } = useContext(MapContext);
  const x = useMotionValue(idea.x);
  const y = useMotionValue(idea.y);

  function activateIdea() {
    ideasHandler.ideaActions.activateIdea(idea.id);
    updateModalType(MapModalType.IDEA)
  }

  function deactivateIdea() {
    ideasHandler.ideaActions.deactivateIdea();
  }

  function updateIdea(data: any) {
    ideasHandler.ideaActions.updateIdea(idea.id, data);
  }

  useMemo(() => {
    x.set(idea.x);
    y.set(idea.y);
  }, [idea]);

  useMotionValueEvent(x, 'animationStart', () => {
    console.log('animation started on x');
  });

  useMotionValueEvent(x, 'change', (latest) => {
    updateIdea({ x: latest });
  });

  useMotionValueEvent(y, 'animationStart', () => {
    console.log('animation started on y');
  });

  useMotionValueEvent(y, 'change', (latest) => {
    updateIdea({ y: latest });
  });

  return {
    idea,
    x,
    y,
    activateIdea,
    deactivateIdea,
    constraintsRef,
  };
};
