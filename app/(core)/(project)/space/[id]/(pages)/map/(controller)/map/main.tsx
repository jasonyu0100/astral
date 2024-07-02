import { createContext, useState } from 'react';

interface Controller {
  cursor: boolean;
  updateCursor: (state: boolean) => void;
}

export const ContextForSpaceMapController = createContext({} as Controller);

export function useControllerForSpaceMap(): Controller {
  const [cursor, setCursor] = useState(false);
  return {
    cursor,
    updateCursor: (state) => setCursor(state),
  };
}

export interface TransformationObj {
  rotation: number;
  x: number;
  y: number;
  scale: number;
}

export function parseTransformString(
  transformString: string,
): TransformationObj {
  const translateRegex = /translate\(([^,]+),([^)]+)\)/;
  const rotateRegex = /rotate\(([^)]+)\)/;
  const scaleRegex = /scale\(([^,]+),([^)]+)\)/;

  const translateMatch = transformString.match(translateRegex);
  const rotateMatch = transformString.match(rotateRegex);
  const scaleMatch = transformString.match(scaleRegex);

  let x = 0,
    y = 0,
    rotation = 0,
    scaleX = 1,
    scaleY = 1;

  // Extract values if matches are found
  if (translateMatch) {
    x = parseFloat(translateMatch[1].trim());
    y = parseFloat(translateMatch[2].trim());
  }
  if (rotateMatch) {
    rotation = parseFloat(rotateMatch[1].trim());
  }
  if (scaleMatch) {
    scaleX = parseFloat(scaleMatch[1].trim());
    scaleY = parseFloat(scaleMatch[2].trim());
  }

  return {
    rotation: rotation,
    scale: scaleX,
    x: x,
    y: y,
  };
}
