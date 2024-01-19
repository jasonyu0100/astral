import { FlowMain } from './flow-epic/main';
import { FlowCenter } from './flow-epic/center/main';
import { FlowSidebar } from './flow-sidebar-epic/main';
import { FlowWrapper } from './flow-epic/wrapper/main';
import { FlowContext } from './page';
import { FlowMoments } from './flow-epic/center/moments/main';
import { FlowMoment } from './flow-epic/center/moments/moment/main';
import { FlowChapters } from './flow-epic/chapters/main';
import { FlowChaptersLeftButton } from './flow-epic/chapters/left/main';
import { FlowChaptersRightButton } from './flow-epic/chapters/right/main';
import { FlowChapter } from './flow-epic/chapters/row/item/main';
import { FlowChaptersRow } from './flow-epic/chapters/row/main';
import { FlowHeader } from './flow-epic/center/header/main';
import { useContext, useState } from 'react';
import FlowChaptersAdd from './flow-epic/chapters/row/add/main';
import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';

export function FlowView() {
  const { moments, chapters, chapterHandler } = useContext(FlowContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [showCreateChapterModal, changeShowCreateChapterModal] = useState(false);

  return (
    <FlowWrapper> 
           <Modal isOpen={showCreateChapterModal} onClose={() => changeShowCreateChapterModal(false)}>
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
                chapterHandler.queryCreateChapter(title, description)
                changeShowCreateChapterModal(false);
                alert('Add Chapter');
              }}
            >
              Add Chapter
            </FormButton>
          </FormFooter>
        </FormContainer>
      </Modal>
      <FlowMain>
        <FlowCenter>
          <FlowHeader />
          <FlowMoments>
            {moments.map((moment, index) => (
              <FlowMoment moment={moment} index={index}></FlowMoment>
            ))}
          </FlowMoments>
        </FlowCenter>
        <FlowChapters>
          <FlowChaptersLeftButton />
          <FlowChaptersRow>
            {chapters.map((chapter) => (
              <FlowChapter chapter={chapter} />
            ))}
            <FlowChaptersAdd 
              onClick={() =>
                changeShowCreateChapterModal(true)
              }
            />
          </FlowChaptersRow>
          <FlowChaptersRightButton />
        </FlowChapters>
      </FlowMain>
      <FlowSidebar />
    </FlowWrapper>
  );
}
