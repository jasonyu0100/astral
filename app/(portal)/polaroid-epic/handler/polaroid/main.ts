import { portalModel } from '@/(portal)/polaroid-epic/model/main';
import { useState, useRef, useEffect, createContext } from 'react';

export interface PolaroidContextObj {
  categories: string[];
  flipped: boolean;
  index: number;
  variant: string;
  transition: string;
  polaroidHandler: PolaroidHandler | any;
}

export const PolaroidContext = createContext<PolaroidContextObj>(
  {} as PolaroidContextObj,
);

export interface PolaroidHandler {
  tapPolaroid: () => void;
  transitionPolaroid: () => void;
  flipPolaroid: () => void;
}

export interface usePolaroidInterface {
  categories: string[];
  flipped: boolean;
  index: number;
  transition: string;
  variant: string;
  _polaroidHandler: PolaroidHandler;
}

export const usePolaroid = () => {
  const categories = portalModel.categories.example;
  const [flipped, changeFlipped] = useState(false);
  const [index, changeIndex] = useState(0);
  const [variant, changeVariant] = useState('m');
  const [transition, changeTransition] = useState('show');

  const duration = 5000;
  const interval = useRef(0);

  const _polaroidHandler: PolaroidHandler = {
    tapPolaroid: () => {
      changeTransition('flash');
      changeIndex((categoryIndex) => (categoryIndex + 1) % categories.length);
      setTimeout(() => {
        changeTransition('show');
      }, 300);
      clearInterval(interval.current);
    },
    transitionPolaroid: () => {
      changeIndex(
        (categoryIndex) =>
          (categoryIndex + 1) % portalModel.categories.example.length,
      );
      changeVariant((variant) => (variant === 'm' ? 'f' : 'm'));
    },
    flipPolaroid: () => {
      if (!flipped) {
        clearInterval(interval.current);
      }
      changeFlipped(!flipped);
    },
  };

  useEffect(() => {
    if (!flipped) {
      let temp = window.setInterval(
        _polaroidHandler.transitionPolaroid,
        duration,
      );
      interval.current = temp;
      return () => clearInterval(interval.current);
    }
  }, [flipped]);

  return {
    categories,
    flipped,
    index,
    transition,
    variant,
    _polaroidHandler,
  };
};
