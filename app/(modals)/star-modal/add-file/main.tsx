import { FormBody } from '@/(components)/form/body/main';
import { FormButton } from '@/(components)/form/button/main';
import { FormFooter } from '@/(components)/form/footer/main';
import { FormContainer } from '@/(components)/form/main';
import { FormTitle } from '@/(components)/form/title/main';
import { Modal } from '@/(components)/modal/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../main';
import { FormInput } from '@/(components)/form/input/main';
import { FormUploadFile } from '@/(components)/form/upload/upload-file/main';
import { FileObj, FileVariant } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { DraftContext } from '@/(cx)/(process)/space/[id]/(stages)/draft/page';
import { FormSelect } from '@/(components)/form/select/main';

export function AddFileStarModal() {
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addFileStarModal;
  const { starHandler } = useContext(DraftContext);
  const [title, changeTitle] = useState('' as string);
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
              starHandler.queryCreateFileStar(title, 0, 0, file);
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
