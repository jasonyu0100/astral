import { Layer } from '@/(common)/layer/main';
import { containerStyles, borderStyles } from '@/(common)/styles/data';
import { FlowHeaderListButton } from './left/list/main';
import { FlowHeaderLeft } from './left/main';
import { FlowHeaderMiddle } from './middle/main';
import FlowHeaderTitle from './middle/title/main';
import { FlowHeaderAddButton } from './right/add/main';
import { FlowHeaderRight } from './right/main';
import { DraftLoomButton } from '../../../../draft/draft-sidebar-epic/modes/collection/header/button-row/button/loom/main';
import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { FlowContext } from '../../../page';
import { FormSelect } from '@/(common)/form/select/main';
import { MomentVisibility } from '@/tables/flow/moment/main';
import { FileObj } from '@/tables/file/main';
import { FormUploadFile } from '@/(common)/form/upload-file/main';

export function FlowHeader() {
  const { momentHandler } = useContext(FlowContext);
  const [title, changeTitle] = useState('');
  const [log, changeLog] = useState('');
  const [visibility, changeVisibility] = useState<string>(
    MomentVisibility.JOURNAL,
  );
  const [file, changeFile] = useState({} as FileObj);
  const [showCreateChapterModal, changeShowCreateChapterModal] =
    useState(false);

  return (
    <>
      <Modal
        isOpen={showCreateChapterModal}
        onClose={() => changeShowCreateChapterModal(false)}
      >
        <FormContainer>
          <FormTitle>Add Chapter</FormTitle>
          <FormBody>
            <FormDescription>Add your chapter here</FormDescription>
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
            <FormUploadFile onChange={(file) => changeFile(file)} />
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                changeShowCreateChapterModal(false);
                momentHandler.queryCreateMoment(title, log, file, visibility);
                alert('Add Moment');
              }}
            >
              Add Chapter
            </FormButton>
          </FormFooter>
        </FormContainer>
      </Modal>
      <Layer
        displayName={FlowHeader.name}
        sizeStyle='h-[50px] w-full flex-shrink-0'
        className={`${containerStyles['row-center']} px-[1rem] space-x-[1rem] justify-between`}
        borderStyle={borderStyles['border-b']}
      >
        <FlowHeaderLeft>
          <FlowHeaderListButton />
        </FlowHeaderLeft>
        <FlowHeaderMiddle>
          <FlowHeaderTitle />
        </FlowHeaderMiddle>
        <FlowHeaderRight>
          <DraftLoomButton />
          <FlowHeaderAddButton
            onClick={() => changeShowCreateChapterModal(true)}
          />
        </FlowHeaderRight>
      </Layer>
    </>
  );
}
