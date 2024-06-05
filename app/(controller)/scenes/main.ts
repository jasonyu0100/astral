import { SpaceSceneObj } from '@/(model)/space/chapter/scene/main';
import { createContext, useMemo, useState } from 'react';
import { partsGqlHelper } from '../../(db)/scenes/main';

export interface SceneActions {
  listScenes: (id: string) => Promise<SpaceSceneObj[]>;
  createScene: (
    title: string,
    description: string,
    variant: string,
  ) => Promise<SpaceSceneObj>;
  updateScenes: (
    parts: SpaceSceneObj[],
  ) => SpaceSceneObj[];
  updateScene: (part: SpaceSceneObj) => SpaceSceneObj;
  goToScene: (part: SpaceSceneObj) => SpaceSceneObj;
  addScene: (part: SpaceSceneObj) => SpaceSceneObj;
}

interface ScenesHandler {
  part?: SpaceSceneObj;
  parts: SpaceSceneObj[];
  partId: string;
  partActions: SceneActions;
}

export const ScenesHandlerContext = createContext({} as ScenesHandler);

export const useScenesHandler = (
  chapterId: string,
): ScenesHandler => {
  const [parts, changeScenes] = useState<SpaceSceneObj[]>(
    [],
  );
  const [partId, changeSceneId] = useState<string>(
    parts.at(0)?.id || '',
  );

  const part = parts.find(
    (part) => part.id === partId,
  );

  const partActions: SceneActions = {
    listScenes: async (chapterId: string) => {
      const parts = await partsGqlHelper.listFromChapter(chapterId);
      changeScenes(parts);
      changeSceneId(parts[0]?.id || '');
      return parts;
    },
    createScene: async (
      title: string,
      description: string,
      variant: string,
    ) => {
      const part = await partsGqlHelper.create(
        chapterId,
        title,
        description,
        variant,
      );
      changeSceneId(part.id);
      changeScenes((prev) => [...prev, part]);
      return part;
    },
    updateScenes: (parts: SpaceSceneObj[]) => {
      changeScenes(parts);
      changeSceneId(parts.at(0)?.id || '');
      return parts;
    },
    updateScene: (part: SpaceSceneObj) => {
      changeSceneId(part.id);
      return part;
    },
    goToScene: (part: SpaceSceneObj) => {
      changeSceneId(part.id);
      return part;
    },
    addScene: (part: SpaceSceneObj) => {
      changeSceneId(part.id);
      changeScenes((prev) => [...prev, part]);
      return part;
    },
  };
  useMemo(() => {
    if (!chapterId) {
      changeScenes([]);
      return;
    }
    partActions.listScenes(chapterId);
  }, [chapterId]);

  return {
    part: part,
    parts: parts,
    partId: partId,
    partActions: partActions,
  };
};
