import { SceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { createContext, useState } from 'react';

interface Controller {
  selected: SceneIdeaObj | null;
  ideaMode: SpaceMapIdeaMode;
  mapMode: SpaceMapMode;
  sidebarMode: SpaceMapSidebarMode;
  updateSelected: (idea: SceneIdeaObj | null) => void;
  updateIdeaMode: (mode: SpaceMapIdeaMode) => void;
  updateMapMode: (mode: SpaceMapMode) => void;
  updateSidebarMode: (mode: SpaceMapSidebarMode) => void;
}

export const ContextForSpaceMap = createContext({} as Controller);

export enum SpaceMapMode {
  SELECT = 'Select',
  SELECTED = 'Selected',
}

export enum SpaceMapIdeaMode {
  DEFAULT = 'Default',
  DETAILS = 'Details',
}

export enum SpaceMapSidebarMode {
  MEDIA = 'Media',
  LIST = 'List',
}

export function useControllerForSpaceMap(): Controller {
  const [selected, setSelected] = useState<SceneIdeaObj | null>(null);
  const [mapMode, setMode] = useState<SpaceMapMode>(SpaceMapMode.SELECTED);
  const [ideaMode, setIdeaMode] = useState<SpaceMapIdeaMode>(
    SpaceMapIdeaMode.DEFAULT,
  );
  const [listMode, setListMode] = useState<SpaceMapSidebarMode>(
    SpaceMapSidebarMode.MEDIA,
  );

  return {
    selected: selected,
    sidebarMode: listMode,
    ideaMode: ideaMode,
    mapMode: mapMode,
    updateSelected: (idea) => setSelected(idea),
    updateIdeaMode: (mode) => setIdeaMode(mode),
    updateMapMode: (mode) => setMode(mode),
    updateSidebarMode: (mode) => setListMode(mode),
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
