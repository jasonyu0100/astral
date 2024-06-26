import {
  ContextForMotionObj,
  useControllerForMotionObj,
} from '@/(logic)/framer/(controller)/main';
import {
  ContextForSceneIdeaMain,
  useControllerForSceneIdeaMain,
} from '@/(server)/(controller)/space/chapter/scene/idea/main';
import { ElementVariant } from '@/(server)/(model)/elements/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { MutableRefObject, useContext } from 'react';
import { FileIdea } from './file/main';
import { SpaceMapUrlIdea } from './link/main';
import { SpaceMapTextIdea } from './note/main';

export function SpaceMapIdea({
  constraintsRef,
}: {
  constraintsRef: MutableRefObject<null>;
}) {
  const idea = useContext(ContextForSceneIdeaObj);
  const ideaMainController = useControllerForSceneIdeaMain(idea.id);
  const MotionObjController = useControllerForMotionObj(
    ideaMainController.state.obj.x,
    ideaMainController.state.obj.y,
    () => {},
    () => {},
    constraintsRef,
  );

  return (
    <ContextForSceneIdeaMain.Provider value={ideaMainController}>
      <ContextForMotionObj.Provider value={MotionObjController}>
        {idea.variant === ElementVariant.FILE && <FileIdea />}
        {idea.variant === ElementVariant.URL && <SpaceMapUrlIdea />}
        {idea.variant === ElementVariant.TEXT && <SpaceMapTextIdea />}
      </ContextForMotionObj.Provider>
    </ContextForSceneIdeaMain.Provider>
  );
}
