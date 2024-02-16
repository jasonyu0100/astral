import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { ResourceModalContext } from '../main';
import { FormInput } from '@/(common)/form/input/main';
import { FormUploadFile } from '@/(common)/form/upload/upload-file/main';
import { FileObj } from '@/(ouros)/(model)/resource/file/main';
import { ExploreCollectionContext } from '@/(verses)/(voyager)/vault/(vault-stages)/explorer/resources-view/[id]/page';
import { ResourceContext } from '@/(ouros)/(model)/resource/main';
import { callUpdateResource } from '@/(verses)/(calls)/resource/main';

export function VaultEditResourceModal() {
  const modalContext = useContext(ResourceModalContext);
  const { resourceHandler } = useContext(ExploreCollectionContext);
  const { opened, close } = modalContext.editResourceModal;
  const resource = useContext(ResourceContext);
  const [title, changeTitle] = useState(resource.title);
  const [description, changeDescription] = useState(resource.description);
  const [file, changeFile] = useState(resource?.file || ({} as FileObj));

  async function updateResource() {
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
              updateResource().then(() => {
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
