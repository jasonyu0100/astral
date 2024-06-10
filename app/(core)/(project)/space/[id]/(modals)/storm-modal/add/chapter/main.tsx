import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext, useState } from 'react';
import { StormModalContext } from '../../main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';

export function StormAddChapterModal() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalContext = useContext(StormModalContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  return (
    <PolaroidModal isOpen={modalContext.addChapterModal.opened} onClose={() => modalContext.addChapterModal.close()}>
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
              chapterListController.actions.createActions.createChapter(title, description);
              modalContext.addChapterModal.close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </PolaroidModal>
  );
}
