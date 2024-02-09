import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { FormUploadFile } from '@/(common)/form/upload/upload-file/main';
import { Modal } from '@/(common)/modal/main';
import { FileObj } from '@/tables/resource/file/main';
import { useContext, useState } from 'react';
import { ExploreCollectionContext } from '../../../(voyager)/vault/(stages)/explorer/resources-view/[id]/page';
import { ResourcesModalContext } from '../main';

export function ExplorerAddResourceModal() {
  const { resourceHandler } = useContext(ExploreCollectionContext);
  const modalContext = useContext(ResourcesModalContext);
  const { opened, close } = modalContext.explorerAddResourceModal;
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [file, changeFile] = useState({} as FileObj);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Upload File</FormTitle>
        <FormBody>
          <FormInput
            title='Label'
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
          <FormUploadFile onChange={(file) => changeFile(file)} label='File' />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              resourceHandler.queryCreateFileResource(name, description, file);
              close();
            }}
          >
            Upload
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
