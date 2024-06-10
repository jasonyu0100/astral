import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext, useState } from 'react';
import { DraftModalContext } from '../../main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';

export function DraftAddChapterModal() {
  const chaptersHandler = useContext(ContextForSpaceChapterList);
  const modalContext = useContext(DraftModalContext);
  const { opened, close } = modalContext.addChapterModal;
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  return (
    <PolaroidModal isOpen={opened} onClose={() => close()}>
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
              chaptersHandler.actions.createActions.createChapter(
                title,
                description,
              );
              close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </PolaroidModal>
  );
}
