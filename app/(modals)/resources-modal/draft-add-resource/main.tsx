import { FormTextArea } from '@/(components)/form/area/main';
import { FormBody } from '@/(components)/form/body/main';
import { FormButton } from '@/(components)/form/button/main';
import { FormFooter } from '@/(components)/form/footer/main';
import { FormInput } from '@/(components)/form/input/main';
import { FormContainer } from '@/(components)/form/main';
import { FormTitle } from '@/(components)/form/title/main';
import { FormUploadFile } from '@/(components)/form/upload/upload-file/main';
import { Modal } from '@/(components)/modal/main';
import { FileObj, FileVariant } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { useContext, useState } from 'react';
import { ResourcesModalContext } from '../main';
import { DraftSidebarContext } from '@/(cx)/(process)/space/[id]/(stages)/draft/(draft-epic)/sidebar/main';
import { FormSelect } from '@/(components)/form/select/main';

export function DraftAddResourceModal() {
  const { resourceHandler } = useContext(DraftSidebarContext);
  const modalContext = useContext(ResourcesModalContext);
  const { opened, close } = modalContext.draftAddResourceModal;
  const [title, changeTitle] = useState('');
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
          <FormInput
            title='Title'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          <FormTextArea
            title='Description'
            rows={5}
            value={description}
            onChange={(e) => changeDescription(e.target.value)}
            style={{ resize: 'none' }}
          />
          <FormUploadFile onChange={(file) => changeFile(file)} label='File' variant={variant}/>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              resourceHandler.queryCreateFileResource(title, description, file);
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
