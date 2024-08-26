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
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import {
  TextElem,
  TextElemVariant,
} from '@/(server)/(model)/elements/text/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { useContext, useState } from 'react';

export function SpaceMapAddTextIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const openableController = useContext(ContextForOpenable);
  const [variant, changeVariant] = useState<string>(TextElemVariant.STICKY);
  const [title, changeTitle] = useState<string>('');
  const [description, changeDescription] = useState<string>('');
  const [text, changeText] = useState<string>('');

  function create() {
    ideaListController.actions.createActions
      .createFromText(
        user.id,
        sceneListController.state.objId,
        title,
        description,
        0,
        0,
        150,
        150,
        {
          id: crypto.randomUUID(),
          title: title,
          text: text,
          variant: variant,
        } as TextElem,
        ideaListController.state.objs.length,
      )
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
              <option value={TextElemVariant.LINE}>Line</option>
              <option value={TextElemVariant.STICKY}>Sticky</option>
              {/* <option value={TextElemVariant.BLOCK}>Block</option> */}
              {/* <option value={TextElemVariant.CODE}>Code</option> */}
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
