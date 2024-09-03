import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForLogLinkList } from '@/(server)/controller/space/chapter/log/link/list';
import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { useControllerForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { FileElem, FileElemVariant } from '@/(server)/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormUploadFile } from '@/ui/form/file/upload/upload-file/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function SpaceJourneyAddFileLinkModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const linkListController = useContext(ContextForLogLinkList);
  const logListController = useContext(ContextForChapterLogList);
  const [title, changeTitle] = useState('' as string);
  const [description, changeDescription] = useState<string>('');
  const [variant, changeVariant] = useState<FileElemVariant>(
    FileElemVariant.IMAGE,
  );
  const [file, changeFile] = useState({} as FileElem);
  const updateListController = useControllerForSessionUpdateOfChapterList('');

  async function createFileIdea() {
    const idea = await linkListController.actions.createActions.createFromFile(
      user.id,
      logListController.state.objId,
      title,
      description,
      file,
    );
    await updateListController.actions.createActions.createFromChapterSceneIdea(
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
            {/* <FormSelect
              title='Variant'
              value={variant}
              onChange={(e) => changeVariant(e.target.value as FileElemVariant)}
            >
              <option value={FileElemVariant.AUDIO}>AUDIO</option>
              <option value={FileElemVariant.IMAGE}>IMAGE</option>
              <option value={FileElemVariant.VIDEO}>VIDEO</option>
            </FormSelect> */}
            {/* <FormInput
              title='Description'
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
            /> */}
            <FormUploadFile
              label={'File'}
              onChange={(file) => changeFile(file)}
              variant={variant}
            />
            <FormInput
              title='Title'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
          </FormBody>
          <FormFooter>
            <FormButton onClick={createFileIdea}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
