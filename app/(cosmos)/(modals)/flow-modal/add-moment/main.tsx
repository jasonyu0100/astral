import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormSelect } from '@/(common)/form/select/main';
import { FormTitle } from '@/(common)/form/title/main';
import { FormUploadFile } from '@/(common)/form/upload/upload-file/main';
import { Modal } from '@/(common)/modal/main';
import { MomentVisibility } from '@/(ouros)/(model)/flow/moment/main';
import { useContext, useState } from 'react';
import { FlowContext } from '../../../(apollo)/space/[id]/(stages)/flow/page';
import { FileObj } from '@/(ouros)/(model)/resource/file/main';
import { FlowModalContext } from '../main';

export function FlowAddMomentModal() {
  const { momentHandler } = useContext(FlowContext);
  const modalContext = useContext(FlowModalContext);
  const { opened, close } = modalContext.addFileMomentModal;
  const [title, changeTitle] = useState('');
  const [log, changeLog] = useState('');
  const [visibility, changeVisibility] = useState(
    MomentVisibility.JOURNAL as string,
  );
  const [file, changeFile] = useState({} as FileObj);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Add Moment</FormTitle>
        <FormBody>
          <FormDescription>Add your moment here</FormDescription>
          <FormInput
            placeholder='Name'
            title='Name'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          <FormSelect
            title='Visibility'
            value={visibility}
            onChange={(e) => changeVisibility(e.target.value)}
          >
            <option value={MomentVisibility.EXPLORE}>
              {MomentVisibility.EXPLORE}
            </option>
            <option value={MomentVisibility.JOURNAL}>
              {MomentVisibility.JOURNAL}
            </option>
            <option value={MomentVisibility.NONE}>
              {MomentVisibility.NONE}
            </option>
            <option value={MomentVisibility.SOCIAL}>
              {MomentVisibility.SOCIAL}
            </option>
          </FormSelect>
          <FormTextArea
            title='Log'
            rows={5}
            value={log}
            onChange={(e) => changeLog(e.target.value)}
            style={{ resize: 'none' }}
          />
          <FormUploadFile onChange={(file) => changeFile(file)} label='File' />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              close();
              momentHandler.queryCreateFileMoment(title, log, file, visibility);
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
