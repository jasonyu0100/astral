import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormUploadFile } from '@/(components)/(form)/file/upload/upload-file/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { useContext, useState } from 'react';

export function SpaceSeaAddUpdateModal() {
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);
  const [file, changeFile] = useState({} as FileElem);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  async function addSpaceUpdate() {
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Update</FormTitle>
          <FormBody>
            <FormInput
              title='Name'
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
            <FormUploadFile
              label='File'
              onChange={(file) => changeFile(file)}
            />
          </FormBody>
          <FormFooter>
            <FormButton onClick={() => addSpaceUpdate()}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
