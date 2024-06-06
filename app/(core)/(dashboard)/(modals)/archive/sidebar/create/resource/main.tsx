import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { FormUploadFile } from '@/(components)/(form)/file/upload/upload-file/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import {
  FileElem,
  FileElemVariant,
} from '@/(model)/elements/file/main';
import { useContext, useState } from 'react';
import { FormSelect } from '@/(components)/(form)/select/main';
import { ArchiveSidebarCreateModalContext } from '../main';
import { ResourcesHandlerContext } from '@/(controller)/(archive)/explorer/resources/main';

export function SidebarCreateResourceModal() {
  const resourcesHandler = useContext(ResourcesHandlerContext);
  const modalContext = useContext(ArchiveSidebarCreateModalContext);
  const { opened, close } = modalContext.createResource;
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [file, changeFile] = useState({} as FileElem);
  const [variant, changeVariant] = useState(FileElemVariant.IMAGE);

  return (
    <PolaroidModal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Add Media</FormTitle>
        <FormBody>
          <FormSelect
            value={variant}
            onChange={(e) => changeVariant(e.target.value as FileElemVariant)}
            title='Variant'
          >
            <option value={FileElemVariant.IMAGE}>Image</option>
            <option value={FileElemVariant.VIDEO}>Video</option>
            <option value={FileElemVariant.AUDIO}>Audio</option>
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
              resourcesHandler.resourceActions.createResourceFromFile(name, description, file);
              close();
            }}
          >
            Upload
          </FormButton>
        </FormFooter>
      </FormContainer>
    </PolaroidModal>
  );
}
