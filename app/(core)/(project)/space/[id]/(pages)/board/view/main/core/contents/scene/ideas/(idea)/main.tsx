import {
  ContextForMotionObj,
  useControllerForMotionObj,
} from '@/(logic)/framer/(controller)/main';
import {
  ContextForSceneIdeaMain,
  useControllerForSceneIdeaMain,
} from '@/(server)/(controller)/space/chapter/scene/idea/main';
import {
  ContextForSceneIdeaObj,
  SceneIdeaVariant,
} from '@/(server)/(model)/space/chapter/scene/idea/main';
import { MutableRefObject, useContext } from 'react';
import { FileIdea } from './file/main';
import { SpaceBoardLinkIdea } from './link/main';
import { SpaceBoardNoteIdea } from './note/main';

export function SpaceBoardIdea({
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
        {idea.variant === SceneIdeaVariant.FILE && <FileIdea />}
        {idea.variant === SceneIdeaVariant.LINK && <SpaceBoardLinkIdea />}
        {idea.variant === SceneIdeaVariant.NOTE && <SpaceBoardNoteIdea />}
      </ContextForMotionObj.Provider>
    </ContextForSceneIdeaMain.Provider>
  );
}
