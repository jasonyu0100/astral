import { ideaSceneDbWrapper } from '@/server/client/scene/main';
import { ideaSceneModel } from '@/server/model/scene/main';

export const sceneMap = {
  model: ideaSceneModel,
  db: ideaSceneDbWrapper,
};
