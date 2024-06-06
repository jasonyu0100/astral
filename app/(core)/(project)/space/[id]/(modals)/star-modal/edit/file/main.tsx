import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../../main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormUploadFile } from '@/(components)/(form)/file/upload/upload-file/main';
import {
  FileElem,
  FileElemVariant,
} from '@/(model)/elements/file/main';
import { FormSelect } from '@/(components)/(form)/select/main';
import { IdeasHandlerContext } from '@/(model)/(controller)/(archive)/ideas/main';
import { FormTextArea } from '@/(components)/(form)/area/main';

export function AddFileStarModal() {
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addFileStarModal;
  const ideasHandler = useContext(IdeasHandlerContext);
  const [title, changeTitle] = useState('' as string);
  const [variant, changeVariant] = useState<FileElemVariant>(FileElemVariant.IMAGE);
  const [file, changeFile] = useState({} as FileElem);
  const [description, changeDescription] = useState<string>('');

  return (
    <PolaroidModal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Media Element</FormTitle>
        <FormBody>
          <FormSelect
            title='Variant'
            value={variant}
            onChange={(e) => changeVariant(e.target.value as FileElemVariant)}
          >
            <option value={FileElemVariant.AUDIO}>AUDIO</option>
            <option value={FileElemVariant.IMAGE}>IMAGE</option>
            <option value={FileElemVariant.VIDEO}>VIDEO</option>
          </FormSelect>
          <FormInput
            title='Title'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          <FormTextArea
            placeholder='Description'
            title='Description'
            value={description}
            onChange={(e) => changeDescription(e.target.value)}
          />
          <FormUploadFile
            label={'File'}
            onChange={(file) => changeFile(file)}
            variant={variant}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              ideasHandler.ideaActions.createFromFile(title, description, 0, 0, file);
              close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </PolaroidModal>
  );
}
