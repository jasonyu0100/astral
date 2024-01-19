import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { FormUploadFile } from '@/(common)/form/upload-file/main';
import { Modal } from '@/(common)/modal/main';
import { FileObj } from '@/tables/file/main';
import { useContext, useState } from 'react';
import { ExploreCollectionContext } from '../../../page';

export function AddFileModal() {
  const { resourceHandler } = useContext(ExploreCollectionContext);
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [file, changeFile] = useState({} as FileObj);
  const [showModal, changeShowModal] = useState(false);

  return (
    <Modal isOpen={showModal} onClose={() => changeShowModal(false)}>
      <FormContainer>
        <FormTitle>Upload File</FormTitle>
        <FormBody>
          <FormDescription>Upload your file here</FormDescription>
          <FormInput
            placeholder='Name'
            title='Name'
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
          <FormUploadFile onChange={(file) => changeFile(file)} />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              resourceHandler.addResource(name, description, file);
              changeShowModal(false);
              alert('Submit Idea');
            }}
          >
            Submit Idea
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
