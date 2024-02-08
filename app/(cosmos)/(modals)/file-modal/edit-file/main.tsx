import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { FileModalContext } from '../main';
import { SelectedImage } from '@/(common)/form/selected-image/main';
import { FileContext } from '../../../(voyager)/vault/(stages)/explorer/collection-view/[id]/collection-epic/resource/main';

export function EditFileModal() {
  const { editFileModal: editFile } = useContext(FileModalContext);
  const resource = useContext(FileContext);

  return (
    <Modal isOpen={editFile.opened} onClose={() => editFile.close()}>
      <FormContainer>
        <FormTitle>Edit File</FormTitle>
        <FormBody>
          <h1>EDIT File</h1>
          {resource.description}
          {resource.title}
          <img src={resource?.file?.src} />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              editFile.close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
