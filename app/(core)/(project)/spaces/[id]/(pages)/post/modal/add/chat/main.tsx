import { FormTextArea } from '@/components/form/area/main';
import { FormBody } from '@/components/form/body/main';
import { FormButton } from '@/components/form/button/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormInput } from '@/components/form/input/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { useControllerForReviewUpdateListFromChapter } from '@/server/controller/update/list-from-chapter';
import { useContext, useState } from 'react';

export function SpacesPostAddSceneModal() {
  const user = useGlobalUser((state) => state.user);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useContext(ContextForOpenable);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const [title, changeTitle] = useState('');
  const [objective, changeObjective] = useState('');
  const activityListController = useControllerForReviewUpdateListFromChapter(
    chapterListController.state.objId,
  );

  async function createScene() {
    const scene = await sceneListController.actions.createActions.createScene(
      title,
      objective,
      objective,
      user.id,
      chapterListController.state.objId,
    );
    await activityListController.actions.createActions.createFromChapterScene(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      scene.id,
    );
    openableController.close();
  }
  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Scene</FormTitle>
          <FormBody>
            <FormInput
              title='Title'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormTextArea
              title='Objective'
              placeholder='Set an objective for your scene'
              rows={8}
              value={objective}
              onChange={(e) => changeObjective(e.target.value)}
              style={{ resize: 'none' }}
            />
          </FormBody>
          <FormFooter>
            <FormButton onClick={createScene}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
