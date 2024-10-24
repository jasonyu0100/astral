import { ContextForTaskLinkList } from '@/(server)/controller/way/link/list';
import { ContextForTaskList } from '@/(server)/controller/way/list';
import { TextElem, TextElemVariant } from '@/(server)/model/elements/text/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { FormTextArea } from '@/components/form/area/main';
import { FormBody } from '@/components/form/body/main';
import { ButtonVariant, FormButton } from '@/components/form/button/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormInput } from '@/components/form/input/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext, useState } from 'react';

export function SpacesBoardAddTextLinkModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const linkListController = useContext(ContextForTaskLinkList);
  const wayListController = useContext(ContextForTaskList);
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState<string>('');
  const [description, changeDescription] = useState<string>('');
  const [text, changeText] = useState<string>('');

  function create() {
    linkListController.actions.createActions
      .createLinkFromTextIdea(
        user.id,
        wayListController.state.objId,
        title,
        description,
        {
          id: crypto.randomUUID(),
          title: title,
          text: text,
          variant: TextElemVariant.STICKY,
        } as TextElem,
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
            <FormInput
              title='Title'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
          </FormBody>
          <FormFooter>
            <FormButton variant={ButtonVariant.PRIMARY} onClick={create}>
              Add
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
