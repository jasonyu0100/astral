import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { Modal } from '@/(components)/(modal)/main';
import { useContext, useState } from 'react';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormUploadFile } from '@/(components)/(form)/upload/upload-file/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { ResourceContext } from '@/(logic)/internal/data/infra/model/resource/main';
import { callUpdateResource } from '@/(logic)/internal/calls/resource/main';
import { ArchiveSidebarCreateModalContext } from '../../create/main';
import { DraftSidebarContext } from '@/(cx)/(process)/space/[id]/(process-stages)/draft/(draft-epic)/sidebar/main';

export function SidebarEditGalleryModal() {
  const modalContext = useContext(ArchiveSidebarCreateModalContext);
  const { resourceHandler } = useContext(DraftSidebarContext);
  const { opened, close } = modalContext.editGallery;
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
