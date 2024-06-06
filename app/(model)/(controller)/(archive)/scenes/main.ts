import { ChapterSceneObj } from '@/(model)/space/chapter/scene/main';
import { createContext, useMemo, useState } from 'react';
import { partsGqlHelper } from '../../(db)/(archive-db)/scenes/main';

export interface SceneActions {
  listScenes: (id: string) => Promise<ChapterSceneObj[]>;
  createScene: (
    title: string,
    description: string,
    variant: string,
  ) => Promise<ChapterSceneObj>;
  updateScenes: (
    parts: ChapterSceneObj[],
  ) => ChapterSceneObj[];
  updateScene: (part: ChapterSceneObj) => ChapterSceneObj;
  goToScene: (part: ChapterSceneObj) => ChapterSceneObj;
  addScene: (part: ChapterSceneObj) => ChapterSceneObj;
}

interface ScenesHandler {
  part?: ChapterSceneObj;
  parts: ChapterSceneObj[];
  partId: string;
  partActions: SceneActions;
}

export const ScenesHandlerContext = createContext({} as ScenesHandler);

export const useScenesHandler = (
  chapterId: string,
): ScenesHandler => {
  const [parts, changeScenes] = useState<ChapterSceneObj[]>(
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
    updateScenes: (parts: ChapterSceneObj[]) => {
      changeScenes(parts);
      changeSceneId(parts.at(0)?.id || '');
      return parts;
    },
    updateScene: (part: ChapterSceneObj) => {
      changeSceneId(part.id);
      return part;
    },
    goToScene: (part: ChapterSceneObj) => {
      changeSceneId(part.id);
      return part;
    },
    addScene: (part: ChapterSceneObj) => {
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
