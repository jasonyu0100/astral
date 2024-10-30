import { FormBody } from '@/components/form/body/main';
import { FormButton, FormButtonVariant } from '@/components/form/button/main';
import { FormUploadFile } from '@/components/form/file/upload/upload-file/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormInput } from '@/components/form/input/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useControllerForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ContextForTaskLinkList } from '@/server/controller/way/link/list';
import { ContextForTaskList } from '@/server/controller/way/list';
import { FileElement } from '@/server/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { useContext, useState } from 'react';

export function SpacesProgressAddFileLinkModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const linkListController = useContext(ContextForTaskLinkList);
  const wayListController = useContext(ContextForTaskList);
  const [title, changeTitle] = useState('' as string);
  const [description, changeDescription] = useState<string>('');
  const [file, changeFile] = useState({} as FileElement);
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  async function createFileIdea() {
    const idea =
      await linkListController.actions.createActions.createLinkFromFileIdea(
        user.id,
        wayListController.state.objId,
        title,
        description,
        file,
      );
    await activityListController.actions.createActions.createFromChapterSceneIdea(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      linkListController.state.objId,
      idea.id,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Upload File</FormTitle>
          <FormBody>
            <FormUploadFile
              label={'File'}
              onChange={(file) => changeFile(file)}
            />
            <FormInput
              title='Title'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormInput
              title='Description'
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
            />
          </FormBody>
          <FormFooter>
            <FormButton
              variant={FormButtonVariant.PRIMARY}
              onClick={createFileIdea}
            >
              Add
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
