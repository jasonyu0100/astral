import { ContextForGalleryCollectionMain } from '@/(server)/controller/gallery/collection/main';
import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { FileElem } from '@/(server)/model/elements/file/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { ButtonVariant, FormButton } from '@/ui/form/button/main';
import { FormUploadFile } from '@/ui/form/file/upload/upload-file/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function VaultFinderCreateResourceModal() {
  const collectionMainController = useContext(ContextForGalleryCollectionMain);
  const resourceListController = useContext(ContextForCollectionResourceList);
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [file, changeFile] = useState({} as FileElem);

  async function createResource() {
    resourceListController.actions.createActions
      .createFromFile(
        user.id,
        collectionMainController.state.objId,
        name,
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
            <FormUploadFile
              onChange={(file) => changeFile(file)}
              label='File'
            />
            <FormInput
              title='Title'
              value={name}
              onChange={(e) => changeName(e.target.value)}
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
            <FormButton
              onClick={createResource}
              variant={ButtonVariant.PRIMARY}
            >
              Upload
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
