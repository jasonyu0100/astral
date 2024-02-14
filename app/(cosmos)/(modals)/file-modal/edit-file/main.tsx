import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { FileModalContext } from '../main';
import { FileContext } from '../../../(voyager)/vault/(vault-stages)/explorer/resources-view/[id]/(resources-epic)/resource/main';

export function EditFileModal() {
  const modalContext = useContext(FileModalContext);
  const { opened, close } = modalContext.editFileModal;
  const resource = useContext(FileContext);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
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
              close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
