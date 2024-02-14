import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { ResourceModalContext } from '../main';
import { ResourceContext } from '../../../(voyager)/vault/(vault-stages)/explorer/resources-view/[id]/(resources-epic)/resource/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormUploadFile } from '@/(common)/form/upload/upload-file/main';
import { amplifyClient } from '@/(dev)/(aws)/graphql/main';
import { updateResourceObj } from '@/graphql/mutations';
import { FileObj } from '@/(ouros)/(model)/resource/file/main';
import { cleanGql } from '@/utils/clean';
import { ExploreCollectionContext } from '@/(cosmos)/(voyager)/vault/(vault-stages)/explorer/resources-view/[id]/page';
import { ResourceObj } from '@/(ouros)/(model)/resource/main';

export function VaultEditResourceModal() {
  const modalContext = useContext(ResourceModalContext);
  const { resourceHandler } = useContext(ExploreCollectionContext);
  const { opened, close } = modalContext.editResourceModal;
  const resource = useContext(ResourceContext);
  const [title, changeTitle] = useState(resource.title);
  const [description, changeDescription] = useState(resource.description);
  const [file, changeFile] = useState(resource?.file || {} as FileObj);

  async function updateResource() {
    const payload = await amplifyClient.graphql({
      query: updateResourceObj,
      variables: {
        input: {
          id: resource.id,
          title: title,
          description: description,
          file: cleanGql(file),
        },
      },
    });

    resourceHandler.updateResource(payload.data.updateResourceObj as ResourceObj);

    return payload;
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
