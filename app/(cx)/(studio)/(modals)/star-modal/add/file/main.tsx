import { FormBody } from '@/(pkgs)/(form)/body/main';
import { FormButton } from '@/(pkgs)/(form)/button/main';
import { FormFooter } from '@/(pkgs)/(form)/footer/main';
import { FormContainer } from '@/(pkgs)/(form)/main';
import { FormTitle } from '@/(pkgs)/(form)/title/main';
import { Modal } from '@/(pkgs)/(modal)/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../../main';
import { FormInput } from '@/(pkgs)/(form)/input/main';
import { FormUploadFile } from '@/(pkgs)/(form)/file/upload/upload-file/main';
import { FileObj, FileVariant } from '@/(lgx)/internal/model/resource/file/main';
import { FormSelect } from '@/(pkgs)/(form)/select/main';
import { StarsHandlerContext } from '@/(lgx)/internal/handler/stars/main';

export function AddFileStarModal() {
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addFileStarModal;
  const starsHandler = useContext(StarsHandlerContext);
  const [title, changeTitle] = useState('' as string);
  const [description, changeDescription] = useState<string>('');
  const [variant, changeVariant] = useState<FileVariant>(FileVariant.IMAGE);
  const [file, changeFile] = useState({} as FileObj);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Media Element</FormTitle>
        <FormBody>
          <FormSelect title="Variant" value={variant} onChange={(e) => changeVariant(e.target.value as FileVariant)}>
            <option value={FileVariant.AUDIO}>AUDIO</option>
            <option value={FileVariant.IMAGE}>IMAGE</option>
            <option value={FileVariant.VIDEO}>VIDEO</option>
          </FormSelect>
          <FormInput title='Name' value={title} onChange={(e) => changeTitle(e.target.value)} />
          <FormUploadFile
            label={'File'}
            onChange={(file) => changeFile(file)}
            variant={variant}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              starsHandler.starActions.createFromFile(title, description, 0, 0, file);
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
