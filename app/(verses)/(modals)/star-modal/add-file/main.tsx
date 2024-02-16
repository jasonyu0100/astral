import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../main';
import { FormInput } from '@/(common)/form/input/main';
import { FormUploadFile } from '@/(common)/form/upload/upload-file/main';
import { FileObj } from '@/(ouros)/(model)/resource/file/main';

export function AddFileStarModal() {
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addFileStarModal;
  const [title, changeTilted] = useState('' as string);
  const [description, changeDescription] = useState('' as string);
  const [file, changeFile] = useState({} as FileObj);

  function addFileStar() {
    
  }

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Element</FormTitle>
        <FormBody>
          <FormInput title='Name' value={title} />
          <FormUploadFile
            label={'File'}
            onChange={(file) => changeFile(file)}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
