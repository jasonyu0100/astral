import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormSelect } from '@/(components)/(form)/select/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import {
  TextElem,
  TextElemVariant,
} from '@/(server)/(model)/elements/text/main';
import { useContext, useState } from 'react';

export function SpaceDraftAddTextIdeaModal() {
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);
  const openableController = useContext(ContextForOpenable);
  const [variant, changeVariant] = useState<string>(TextElemVariant.STICKY);
  const [text, changeText] = useState<string>('');
  const [title, changeTitle] = useState<string>('');
  const [description, changeDescription] = useState<string>('');

  function create() {
    sceneIdeaListController.actions.createActions
      .createFromText(title, description, 0, 0, {
        id: crypto.randomUUID(),
        title: title,
        text: text,
        variant: variant,
      } as TextElem)
      .then(() => {
        openableController.close();
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Note Element</FormTitle>
          <FormBody>
            <FormSelect
              title='Variant'
              value={variant}
              onChange={(e) => changeVariant(e.target.value)}
            >
              <option value={TextElemVariant.STICKY}>Sticky Note</option>
              <option value={TextElemVariant.PROMPT}>Prompt</option>
              <option value={TextElemVariant.QUOTE}>Quote</option>
            </FormSelect>
            <FormInput
              placeholder='Title'
              title='Title'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormInput
              placeholder='Description'
              title='Description'
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
            />
            <FormTextArea
              placeholder='Note Text'
              title='Text'
              value={text}
              onChange={(e) => changeText(e.target.value)}
              rows={10}
            />
          </FormBody>
          <FormFooter>
            <FormButton onClick={create}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
