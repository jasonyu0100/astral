import { FormBody } from '@/(pkgs)/(form)/body/main';
import { ButtonVariant, FormButton } from '@/(pkgs)/(form)/button/main';
import { FormFooter } from '@/(pkgs)/(form)/footer/main';
import { FormContainer } from '@/(pkgs)/(form)/main';
import { FormTitle } from '@/(pkgs)/(form)/title/main';
import { Modal } from '@/(pkgs)/(modal)/main';
import { useContext, useState } from 'react';
import { FormInput } from '@/(pkgs)/(form)/input/main';
import { FormUploadFile } from '@/(pkgs)/(form)/file/upload/upload-file/main';
import { FileObj } from '@/(lgx)/internal/model/resource/file/main';
import { ResourceContext } from '@/(lgx)/internal/model/resource/main';
import { EditResourceModalContext } from './main';
import { ResourcesHandlerContext } from '@/(lgx)/internal/handler/explorer/resources/main';

export function ExplorerEditResourceModal() {
  const modalContext = useContext(EditResourceModalContext);
  const resourcesHandler = useContext(ResourcesHandlerContext);
  const { opened, close } = modalContext.editResource;
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
                .updateResource(resource.id, {
                  ...resource,
                  title,
                  description,
                  file,
                })
                .then(() => {
                  close();
                });
            }}
          >
            Save
          </FormButton>
          <FormButton
            variant={ButtonVariant.SECONDARY}
            onClick={() => {
              resourcesHandler.resourceActions
                .deleteResource(resource.id)
                .then(() => {
                  close();
                });
            }}
          >
            Delete
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
