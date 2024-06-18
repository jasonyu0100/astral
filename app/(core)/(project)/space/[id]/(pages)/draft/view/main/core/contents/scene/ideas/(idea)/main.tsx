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
import { SpaceDraftUrlIdea } from './link/main';
import { SpaceDraftTextIdea } from './note/main';

export function SpaceDraftIdea({
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
        {idea.variant === ElementVariant.URL && <SpaceDraftUrlIdea />}
        {idea.variant === ElementVariant.TEXT && <SpaceDraftTextIdea />}
      </ContextForMotionObj.Provider>
    </ContextForSceneIdeaMain.Provider>
  );
}
