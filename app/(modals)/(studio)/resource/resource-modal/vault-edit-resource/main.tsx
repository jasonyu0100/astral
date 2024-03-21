import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { Modal } from '@/(components)/(modal)/main';
import { useContext, useState } from 'react';
import { ResourceModalContext } from '../main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormUploadFile } from '@/(components)/(form)/file/upload/upload-file/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { ResourceContext } from '@/(logic)/internal/model/resource/main';
import { ResourcesHandlerContext } from '@/(logic)/internal/handler/explorer/resources/main';

export function ArchiveEditResourceModal() {
  const modalContext = useContext(ResourceModalContext);
  const resourcesHandler = useContext(ResourcesHandlerContext);
  const { opened, close } = modalContext.editResourceModal;
  const resource = useContext(ResourceContext);
  const [title, changeTitle] = useState(resource.title);
  const [description, changeDescription] = useState(resource.description);
  const [file, changeFile] = useState(resource?.file || ({} as FileObj));

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
              resourcesHandler.resourceActions
                .queryUpdateResource(resource.id, {
                  ...resource,
                  title, 
                  description, 
                  file
                })
                .then(() => {
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
