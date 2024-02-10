import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormSelect } from '@/(common)/form/select/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { MomentVisibility } from '@/tables/flow/moment/main';
import { useContext, useState } from 'react';
import { FlowModalContext } from '../main';
import { FlowContext } from '@/(cosmos)/(apollo)/space/[id]/(stages)/flow/page';

export function FlowAddLogModal() {
  const { momentHandler } = useContext(FlowContext);
  const modalContext = useContext(FlowModalContext);
  const { opened, close, log } = modalContext.addLogMomentModal;
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [visibility, changeVisibility] = useState(
    MomentVisibility.JOURNAL as string,
  );

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
              close();
              momentHandler.queryCreateLogMoment(title, description, log, visibility);
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
