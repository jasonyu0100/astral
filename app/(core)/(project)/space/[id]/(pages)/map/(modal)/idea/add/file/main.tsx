import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormUploadFile } from '@/(components)/(form)/file/upload/upload-file/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormSelect } from '@/(components)/(form)/select/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { useControllerForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ContextForSpaceMain } from '@/(server)/(controller)/space/main';
import {
  FileElem,
  FileElemVariant,
} from '@/(server)/(model)/elements/file/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { useContext, useState } from 'react';

export function SpaceMapAddFileIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);
  const [title, changeTitle] = useState('' as string);
  const [description, changeDescription] = useState<string>('');
  const [variant, changeVariant] = useState<FileElemVariant>(
    FileElemVariant.IMAGE,
  );
  const [file, changeFile] = useState({} as FileElem);
  const updateListController = useControllerForSessionUpdateOfChapterList('');

  async function createFileIdea() {
    const idea =
      await sceneIdeaListController.actions.createActions.createFromFile(
        user.id,
        sceneIdeaListController.state.objId,
        title,
        description,
        0,
        0,
        150,
        150,
        file,
      );
    await updateListController.actions.createActions.createFromChapterSceneIdea(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      sceneIdeaListController.state.objId,
      idea.id,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Media Element</FormTitle>
          <FormBody>
            <FormSelect
              title='Variant'
              value={variant}
              onChange={(e) => changeVariant(e.target.value as FileElemVariant)}
            >
              <option value={FileElemVariant.AUDIO}>AUDIO</option>
              <option value={FileElemVariant.IMAGE}>IMAGE</option>
              <option value={FileElemVariant.VIDEO}>VIDEO</option>
            </FormSelect>
            <FormInput
              title='Name'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormInput
              title='Description'
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
            />
            <FormUploadFile
              label={'File'}
              onChange={(file) => changeFile(file)}
              variant={variant}
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
