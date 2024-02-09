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
import { useContext, useEffect, useState } from 'react';
import { FlowContext } from '../../../(apollo)/space/[id]/(stages)/flow/page';
import { FlowModalContext } from '../main';
import { oembed } from '@loomhq/loom-embed';

export function FlowAddLoomModal() {
  const { momentHandler } = useContext(FlowContext);
  const modalContext = useContext(FlowModalContext);
  const { opened, close, log } = modalContext.addLogMomentModal;
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [visibility, changeVisibility] = useState(
    MomentVisibility.JOURNAL as string,
  );
  const [videoHTML, setVideoHTML] = useState('');

  useEffect(() => {
    if (!log.loomId) {
      return;
    }
    embedLoom();
  }, [log]);

  const embedLoom = async () => {
    const { html } = await oembed(log?.sharedUrl, { width: 600 });
    setVideoHTML(html);
  };

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
          <div className='flex w-full flex-col items-center'>
            <div dangerouslySetInnerHTML={{ __html: videoHTML }}></div>
          </div>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              close();
              momentHandler.queryCreateLoomMoment(title, description, log, visibility);
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
