import { FormTextArea } from '@/(pkgs)/(form)/area/main';
import { FormBody } from '@/(pkgs)/(form)/body/main';
import { FormButton } from '@/(pkgs)/(form)/button/main';
import { FormFooter } from '@/(pkgs)/(form)/footer/main';
import { FormInput } from '@/(pkgs)/(form)/input/main';
import { FormContainer } from '@/(pkgs)/(form)/main';
import { FormTitle } from '@/(pkgs)/(form)/title/main';
import { Modal } from '@/(pkgs)/(modal)/main';
import { useContext, useState } from 'react';
import { StormModalContext } from '../../main';
import { ChaptersHandlerContext } from '@/(lgx)/internal/handler/chapters/main';

export function StormAddChapterModal() {
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chapters = chaptersHandler.chapters;
  const modalContext = useContext(StormModalContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  return (
    <Modal isOpen={modalContext.addChapterModal.opened} onClose={() => modalContext.addChapterModal.close()}>
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
              chaptersHandler.chapterActions.createChapter(title, description, chapters.length);
              modalContext.addChapterModal.close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
