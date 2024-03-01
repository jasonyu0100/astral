import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { FormUploadFile } from '@/(components)/(form)/upload/upload-file/main';
import { Modal } from '@/(components)/(modal)/main';
import { FileObj, FileVariant } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { useContext, useState } from 'react';
import { FormSelect } from '@/(components)/(form)/select/main';
import { ArchiveSidebarModalContext } from '../../main';
import { DraftSidebarContext } from '@/(cx)/(process)/space/[id]/(process-stages)/draft/(draft-epic)/sidebar/main';

export function SidebarCreateResourceModal() {
  const { resourceHandler } = useContext(DraftSidebarContext);
  const modalContext = useContext(ArchiveSidebarModalContext);
  const { opened, close } = modalContext.createResource;
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
