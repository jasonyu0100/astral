import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { Modal } from '@/(components)/(modal)/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../main';
import { DraftContext } from '@/(cx)/(process)/space/[id]/(stages)/draft/page';
import { NoteObj, NoteVariant } from '@/(logic)/internal/data/infra/model/resource/note/main';
import { FormSelect } from '@/(components)/(form)/select/main';
import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormInput } from '@/(components)/(form)/input/main';

export function AddNoteStarModal() {
  const { starHandler } = useContext(DraftContext);
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addNoteStarModal;
  const [variant, changeVariant] = useState<string>(NoteVariant.STICKY);
  const [text, changeText] = useState<string>("");
  const [title, changeTitle] = useState<string>("");

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Note Element</FormTitle>
        <FormBody>
          <FormSelect title="Variant" value={variant} onChange={(e) => changeVariant(e.target.value)}>
            <option value={NoteVariant.STICKY}>Sticky Note</option>
            <option value={NoteVariant.PROMPT}>Prompt</option>
            <option value={NoteVariant.QUOTE}>Quote</option>
          </FormSelect>
          <FormInput placeholder="Title" title="Title" value={title} onChange={(e) => changeTitle(e.target.value)} />
          <FormTextArea  placeholder="Note Text" title="Text" value={text} onChange={(e) => changeText(e.target.value)} 
            rows={10}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              close();
              starHandler.queryCreateNoteStar(title, 0, 0, {
                id: crypto.randomUUID(),
                title: title,
                text: text,
                variant: variant
              } as NoteObj);
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
