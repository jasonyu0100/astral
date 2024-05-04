import { FormTextArea } from '@/(lib)/(form)/area/main';
import { FormBody } from '@/(lib)/(form)/body/main';
import { FormButton } from '@/(lib)/(form)/button/main';
import { FormFooter } from '@/(lib)/(form)/footer/main';
import { FormInput } from '@/(lib)/(form)/input/main';
import { FormContainer } from '@/(lib)/(form)/main';
import { FormTitle } from '@/(lib)/(form)/title/main';
import { Modal } from '@/(lib)/(modal)/main';
import { useContext, useState } from 'react';
import { FileObj } from '@/(types)/model/resource/file/main';
import { FlowModalContext } from '../../main';
import { FormSearchImage } from '@/(lib)/(form)/file/search/search-image/main';
import { Divider } from '@/(lib)/(line)/divider/main';
import { MomentsHandlerContext } from '@/(lgx)/internal/handler/moments/main';

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
              momentsHandler.momentActions.createMomentFromFile(
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
