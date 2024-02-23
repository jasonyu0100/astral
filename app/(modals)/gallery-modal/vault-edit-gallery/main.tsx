import { FormBody } from '@/(components)/form/body/main';
import { FormButton } from '@/(components)/form/button/main';
import { FormFooter } from '@/(components)/form/footer/main';
import { FormContainer } from '@/(components)/form/main';
import { FormTitle } from '@/(components)/form/title/main';
import { Modal } from '@/(components)/modal/main';
import { useContext, useState } from 'react';
import { GalleryModalContext } from '../main';
import { FormInput } from '@/(components)/form/input/main';
import { FormUploadFile } from '@/(components)/form/upload/upload-file/main';
import { FileObj } from '@/(logic)/model/resource/file/main';
import { ExploreCollectionContext } from '@/(cx)/(studio)/vault/(vault-stages)/explorer/resources-view/[id]/page';
import { ResourceContext } from '@/(logic)/model/resource/main';
import { callUpdateResource } from '@/(logic)/calls/resource/main';

export function VaultEditGalleryModal() {
  const modalContext = useContext(GalleryModalContext);
  const { resourceHandler } = useContext(ExploreCollectionContext);
  const { opened, close } = modalContext.editGalleryModal;
  const resource = useContext(ResourceContext);
  const [title, changeTitle] = useState(resource.title);
  const [description, changeDescription] = useState(resource.description);
  const [file, changeFile] = useState(resource?.file || ({} as FileObj));

  async function updateGallery() {
    await callUpdateResource(resource.id, title, description, file).then((resource) => {
      resourceHandler.updateResource(resource);
    });
  }

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>File</FormTitle>
        <FormBody>
          <FormUploadFile
            label='File'
            defaultFile={resource.file}
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
            onClick={() => {
              updateGallery().then(() => {
                close();
              });
            }}
          >
            Save
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
