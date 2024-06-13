import { MutableRefObject, useContext } from 'react';
import {
  ContextForSceneIdeaObj,
  SceneIdeaVariant,
} from '@/(server)/(model)/space/chapter/scene/idea/main';
import { FileIdea } from './file/main';
import { LinkIdea } from './link/main';
import { NoteIdea } from './note/main';
import {
  ContextForSceneIdeaMain,
  useControllerForSceneIdeaMain,
} from '@/(server)/(controller)/space/chapter/scene/idea/main';
import {
  ContextForMotionObj,
  useControllerForMotionObj,
} from '@/(logic)/framer/(controller)/main';

export function BoardIdea({
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
        {idea.variant === SceneIdeaVariant.LINK && <LinkIdea />}
        {idea.variant === SceneIdeaVariant.NOTE && <NoteIdea />}
      </ContextForMotionObj.Provider>
    </ContextForSceneIdeaMain.Provider>
  );
}
