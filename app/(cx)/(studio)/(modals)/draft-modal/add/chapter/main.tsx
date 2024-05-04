import { FormTextArea } from '@/(lib)/(form)/area/main';
import { FormBody } from '@/(lib)/(form)/body/main';
import { FormButton } from '@/(lib)/(form)/button/main';
import { FormFooter } from '@/(lib)/(form)/footer/main';
import { FormInput } from '@/(lib)/(form)/input/main';
import { FormContainer } from '@/(lib)/(form)/main';
import { FormTitle } from '@/(lib)/(form)/title/main';
import { Modal } from '@/(lib)/(modal)/main';
import { useContext, useState } from 'react';
import { DraftModalContext } from '../../main';
import { ChaptersHandlerContext } from '@/(lgx)/internal/handler/chapters/main';

export function DraftAddChapterModal() {
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chapters = chaptersHandler.chapters;
  const modalContext = useContext(DraftModalContext);
  const { opened, close } = modalContext.addChapterModal;
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Add Chapter</FormTitle>
        <FormBody>
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
              chaptersHandler.chapterActions.createChapter(
                title,
                description,
                chapters.length,
              );
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
