import { FormTextArea } from '@/(lib)/(form)/area/main';
import { FormBody } from '@/(lib)/(form)/body/main';
import { FormButton } from '@/(lib)/(form)/button/main';
import { FormFooter } from '@/(lib)/(form)/footer/main';
import { FormInput } from '@/(lib)/(form)/input/main';
import { FormContainer } from '@/(lib)/(form)/main';
import { FormTitle } from '@/(lib)/(form)/title/main';
import { FormUploadFile } from '@/(lib)/(form)/file/upload/upload-file/main';
import { Modal } from '@/(lib)/(modal)/main';
import {
  FileObj,
  FileVariant,
} from '@/(lgx)/internal/model/resource/file/main';
import { useContext, useState } from 'react';
import { FormSelect } from '@/(lib)/(form)/select/main';
import { ArchiveExplorerCreateModalContext } from '../main';
import { ResourcesHandlerContext } from '@/(lgx)/internal/handler/explorer/resources/main';

export function ExplorerCreateResourceModal() {
  const resourcesHandler = useContext(ResourcesHandlerContext);
  const modalContext = useContext(ArchiveExplorerCreateModalContext);
  const { opened, close } = modalContext.createResource;
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [file, changeFile] = useState({} as FileObj);
  const [variant, changeVariant] = useState(FileVariant.IMAGE);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Add Media</FormTitle>
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
              resourcesHandler.resourceActions.createResourceFromFile(
                name,
                description,
                file,
              );
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
