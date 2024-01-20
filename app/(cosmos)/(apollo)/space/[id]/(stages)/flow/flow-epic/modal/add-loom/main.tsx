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
import { FlowContext } from '../../../page';
import { FlowModalContext } from '../main';
import { oembed } from '@loomhq/loom-embed';

export function FlowAddLoomModal() {
  const { momentHandler } = useContext(FlowContext);
  const { addLoom } = useContext(FlowModalContext);
  const { loom } = addLoom;
  const [title, changeTitle] = useState('');
  const [log, changeLog] = useState('');
  const [visibility, changeVisibility] = useState<string>(
    MomentVisibility.JOURNAL,
  );
  const [videoHTML, setVideoHTML] = useState('');

  useEffect(() => {
    if (!loom.loomId) {
      return;
    }
    embedLoom();
  }, [loom]);

  const embedLoom = async () => {
    const { html } = await oembed(addLoom?.loom?.sharedUrl, { width: 600});
    setVideoHTML(html);
  };

  return (
    <Modal isOpen={addLoom.opened} onClose={() => addLoom.close()}>
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
          <div className='flex flex-col items-center w-full'>
            <div dangerouslySetInnerHTML={{ __html: videoHTML }}></div>
          </div>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              addLoom.close();
              momentHandler.queryCreateLoomMoment(title, log, loom, visibility);
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
