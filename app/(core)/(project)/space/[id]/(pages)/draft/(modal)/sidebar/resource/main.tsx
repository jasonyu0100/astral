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
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForGalleryCollectionMain } from '@/(server)/(controller)/gallery/collection/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import {
  FileElem,
  FileElemVariant,
} from '@/(server)/(model)/elements/file/main';
import { useContext, useState } from 'react';

export function SpaceDraftCreateResourceModal() {
  const resourceListHandler = useContext(ContextForCollectionResourceList);
  const collectMainController = useContext(ContextForGalleryCollectionMain);
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [file, changeFile] = useState({} as FileElem);
  const [variant, changeVariant] = useState(FileElemVariant.IMAGE);

  function createResource() {
    resourceListHandler.actions.createActions
      .createFromFile(
        user.id,
        collectMainController.state.objId,
        title,
        description,
        file,
      )
      .then(() => {
        openableController.close();
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Media</FormTitle>
          <FormBody>
            <FormSelect
              value={variant}
              onChange={(e) => changeVariant(e.target.value as FileElemVariant)}
              title='Variant'
            >
              <option value={FileElemVariant.IMAGE}>Image</option>
              <option value={FileElemVariant.VIDEO}>Video</option>
              <option value={FileElemVariant.AUDIO}>Audio</option>
            </FormSelect>
            <FormUploadFile
              onChange={(file) => changeFile(file)}
              label='File'
              variant={variant}
            />
            <FormInput
              title='Title'
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
            <FormButton onClick={createResource}>Upload</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
