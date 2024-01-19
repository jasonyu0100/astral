import { DraftMain } from './draft-epic/main';
import { DraftCenter } from './draft-epic/center/main';
import { DraftSidebar } from './draft-sidebar-epic/main';
import { useContext, useState } from 'react';
import { DraftWrapper } from './draft-epic/wrapper/main';
import { DraftContext } from './page';
import { DraftConstellation } from './draft-epic/center/constellation/main';
import { DraftLinks } from './draft-epic/center/constellation/links/main';
import { DraftHeader } from './draft-epic/center/header/main';
import { DraftChaptersLeftButton } from './draft-epic/chapters/left/main';
import { DraftChaptersRightButton } from './draft-epic/chapters/right/main';
import { DraftChaptersRow } from './draft-epic/chapters/row/main';
import { DraftChapter } from './draft-epic/chapters/row/item/main';
import DraftChaptersAdd from './draft-epic/chapters/row/add/main';
import { DraftChapters } from './draft-epic/chapters/main';
import { DraftConstellationStars } from './draft-epic/center/constellation/stars/main';
import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';

export function DraftView() {
  const { chapters, chapterHandler, chapterId } = useContext(DraftContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [showCreateChapterModal, changeShowCreateChapterModal] = useState(false);

  return (
    <DraftWrapper>
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
      <DraftMain>
        <DraftCenter>
          <DraftHeader></DraftHeader>
          <DraftConstellation>
            <DraftLinks />
            <DraftConstellationStars />
          </DraftConstellation>
        </DraftCenter>
        <DraftChapters>
          <DraftChaptersLeftButton />
          <DraftChaptersRow>
            {chapters.map((chapter) => (
              <DraftChapter chapter={chapter} />
            ))}
            <DraftChaptersAdd 
              onClick={() =>
                changeShowCreateChapterModal(true)
              }
            />
          </DraftChaptersRow>
          <DraftChaptersRightButton />
        </DraftChapters>
      </DraftMain>
      <DraftSidebar />
    </DraftWrapper>
  );
}
