import { ideaSceneDbWrapper } from '@/architecture/client/scene/main';
import { ideaSceneModel } from '@/architecture/model/scene/main';

export const sceneMap = {
  model: ideaSceneModel,
  db: ideaSceneDbWrapper,
};
