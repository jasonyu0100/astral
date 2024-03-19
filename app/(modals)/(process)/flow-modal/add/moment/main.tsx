import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { Modal } from '@/(components)/(modal)/main';
import { useContext, useState } from 'react';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { FlowModalContext } from '../../main';
import { FormSearchImage } from '@/(components)/(form)/file/search/search-image/main';
import { Divider } from '@/(components)/(basic)/divider/main';
import { MomentsHandlerContext } from '@/(logic)/internal/handler/flow/moments/main';

export function FlowAddMomentModal() {
  const momentsHandler = useContext(MomentsHandlerContext);
  const modalContext = useContext(FlowModalContext);
  const { opened, close } = modalContext.addFileMomentModal;
  const [title, changeTitle] = useState('');
  const [log, changeLog] = useState('');
  const [file, changeFile] = useState({} as FileObj);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Add Moment</FormTitle>
        <FormBody>
          <FormSearchImage
            file={file}
            onChange={(file) => changeFile(file)}
            label='File'
          />
          <Divider />
          <FormInput
            placeholder='Name'
            title='Name'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          <FormTextArea
            title='Log'
            rows={5}
            value={log}
            onChange={(e) => changeLog(e.target.value)}
            style={{ resize: 'none' }}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              close();
              momentsHandler.momentActions.queryCreateFileMoment(
                title,
                log,
                file,
              );
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
