import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../../main';
import { NoteElem, NoteElemVariant } from '@/(server)/(model)/elements/note/main';
import { FormSelect } from '@/(components)/(form)/select/main';
import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';

export function AddNoteStarModal() {
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addNoteStarModal;
  const [variant, changeVariant] = useState<string>(NoteElemVariant.STICKY);
  const [text, changeText] = useState<string>("");
  const [title, changeTitle] = useState<string>("");
  const [description, changeDescription] = useState<string>('');

  return (
    <PolaroidModal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Note Element</FormTitle>
        <FormBody>
          <FormSelect title="Variant" value={variant} onChange={(e) => changeVariant(e.target.value)}>
            <option value={NoteElemVariant.STICKY}>Sticky Note</option>
            <option value={NoteElemVariant.PROMPT}>Prompt</option>
            <option value={NoteElemVariant.QUOTE}>Quote</option>
          </FormSelect>
          <FormInput placeholder="Title" title="Title" value={title} onChange={(e) => changeTitle(e.target.value)} />
          <FormInput
            placeholder='Description'
            title='Description'
            value={description}
            onChange={(e) => changeDescription(e.target.value)}
          />
          <FormTextArea  placeholder="Note Text" title="Text" value={text} onChange={(e) => changeText(e.target.value)} 
            rows={10}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              close();
              sceneIdeaListController.actions.createActions.createFromNote(title, description, 0, 0, {
                id: crypto.randomUUID(),
                title: title,
                text: text,
                variant: variant
              } as NoteElem);
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </PolaroidModal>
  );
}
