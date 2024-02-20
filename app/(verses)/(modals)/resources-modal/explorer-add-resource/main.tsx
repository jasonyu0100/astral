import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { FormUploadFile } from '@/(common)/form/upload/upload-file/main';
import { Modal } from '@/(common)/modal/main';
import { FileObj, FileVariant } from '@/(ouros)/(model)/resource/file/main';
import { useContext, useState } from 'react';
import { ExploreCollectionContext } from '../../../(voyager)/vault/(vault-stages)/explorer/resources-view/[id]/page';
import { ResourcesModalContext } from '../main';
import { FormSelect } from '@/(common)/form/select/main';

export function ExplorerAddResourceModal() {
  const { resourceHandler } = useContext(ExploreCollectionContext);
  const modalContext = useContext(ResourcesModalContext);
  const { opened, close } = modalContext.explorerAddResourceModal;
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [file, changeFile] = useState({} as FileObj);
  const [variant, changeVariant] = useState(FileVariant.IMAGE);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Upload Media</FormTitle>
        <FormBody>
          <FormSelect
            value={variant}
            onChange={(e) => changeVariant(e.target.value as FileVariant)}
            title='Variant'
          >
            <option value={FileVariant.IMAGE}>Image</option>
            <option value={FileVariant.VIDEO}>Video</option>
            <option value={FileVariant.AUDIO}>Audio</option>
          </FormSelect>
          <FormUploadFile
            onChange={(file) => changeFile(file)}
            label='File'
            variant={variant}
          />
          <FormInput
            title='Title'
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
