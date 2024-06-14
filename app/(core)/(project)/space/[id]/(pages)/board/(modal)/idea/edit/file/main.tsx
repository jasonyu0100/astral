import { FormTextArea } from '@/(components)/(form)/area/main';
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
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import {
  FileElem,
  FileElemVariant,
} from '@/(server)/(model)/elements/file/main';
import { useContext, useState } from 'react';

export function SpaceBoardEditFileIdeaModal() {
  const openableController = useContext(ContextForOpenable);
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);
  const [title, changeTitle] = useState('' as string);
  const [variant, changeVariant] = useState<FileElemVariant>(
    FileElemVariant.IMAGE,
  );
  const [file, changeFile] = useState({} as FileElem);
  const [description, changeDescription] = useState<string>('');

  function create() {
    sceneIdeaListController.actions.createActions
      .createFromFile(title, description, 0, 0, file)
      .then(() => {
        close();
      });
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
              title='Title'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormTextArea
              placeholder='Description'
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
            <FormButton onClick={create}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
