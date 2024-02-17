import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../main';
import { DraftContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/page';
import { NoteObj, NoteVariant } from '@/(ouros)/(model)/resource/note/main';
import { FormSelect } from '@/(common)/form/select/main';
import { FormTextArea } from '@/(common)/form/area/main';
import { FormInput } from '@/(common)/form/input/main';

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
              starHandler.queryCreateNoteStar("hello", 0, 0, {
                id: crypto.randomUUID(),
                title: title,
                text: text,
                variant: NoteVariant.STICKY
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
