import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { useControllerForChapterUpdateItemListFromChapters } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { useContext, useState } from 'react';

export function SpaceDraftAddSceneModal() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const updateListController =
    useControllerForChapterUpdateItemListFromChapters('');
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  async function createScene() {
    const scene = await sceneListController.actions.createActions.createScene(
      title,
      description,
      user.id,
      chapterListController.state.objId,
    );
    await updateListController.actions.createActions.createFromChapterScene(
      user.id,
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
              title='Name'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormTextArea
              title='Description'
              rows={5}
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
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
