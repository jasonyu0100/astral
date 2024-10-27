import { FormTextArea } from '@/components/form/area/main';
import { FormBody } from '@/components/form/body/main';
import { FormButton, FormButtonVariant } from '@/components/form/button/main';
import { FormUploadFile } from '@/components/form/file/upload/upload-file/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormInput } from '@/components/form/input/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForGalleryCollectionList } from '@/server/controller/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/server/controller/gallery/collection/resource/list';
import { FileElement } from '@/server/model/elements/file/main';
import { useContext, useState } from 'react';

export function SpacesViewAddResourceModal() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const resourceListController = useContext(ContextForCollectionResourceList);
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [file, changeFile] = useState({} as FileElement);

  async function createResource() {
    resourceListController.actions.createActions
      .createFromFile(
        user.id,
        collectionListController.state.objId,
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
              variant={FormButtonVariant.PRIMARY}
            >
              Upload
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
