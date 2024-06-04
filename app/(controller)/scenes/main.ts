import { SceneObj } from '@/(model)/space/chapter/scene/main';
import { createContext, useMemo, useState } from 'react';
import { partsGqlHelper } from '../../(db)/scenes/main';

export interface SceneActions {
  listScenes: (id: string) => Promise<SceneObj[]>;
  createScene: (
    title: string,
    description: string,
    variant: string,
  ) => Promise<SceneObj>;
  updateScenes: (
    parts: SceneObj[],
  ) => SceneObj[];
  updateScene: (part: SceneObj) => SceneObj;
  goToScene: (part: SceneObj) => SceneObj;
  addScene: (part: SceneObj) => SceneObj;
}

interface ScenesHandler {
  part?: SceneObj;
  parts: SceneObj[];
  partId: string;
  partActions: SceneActions;
}

export const ScenesHandlerContext = createContext({} as ScenesHandler);

export const useScenesHandler = (
  chapterId: string,
): ScenesHandler => {
  const [parts, changeScenes] = useState<SceneObj[]>(
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
    updateScenes: (parts: SceneObj[]) => {
      changeScenes(parts);
      changeSceneId(parts.at(0)?.id || '');
      return parts;
    },
    updateScene: (part: SceneObj) => {
      changeSceneId(part.id);
      return part;
    },
    goToScene: (part: SceneObj) => {
      changeSceneId(part.id);
      return part;
    },
    addScene: (part: SceneObj) => {
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
