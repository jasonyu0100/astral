import { FormBody } from '@/(pkgs)/(form)/body/main';
import { FormButton } from '@/(pkgs)/(form)/button/main';
import { FormFooter } from '@/(pkgs)/(form)/footer/main';
import { FormContainer } from '@/(pkgs)/(form)/main';
import { FormTitle } from '@/(pkgs)/(form)/title/main';
import { Modal } from '@/(pkgs)/(modal)/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../../main';
import { NoteObj, NoteVariant } from '@/(lgx)/internal/model/resource/note/main';
import { FormSelect } from '@/(pkgs)/(form)/select/main';
import { FormTextArea } from '@/(pkgs)/(form)/area/main';
import { FormInput } from '@/(pkgs)/(form)/input/main';
import { StarsHandlerContext } from '@/(lgx)/internal/handler/stars/main';

export function AddNoteStarModal() {
  const starsHandler = useContext(StarsHandlerContext);
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addNoteStarModal;
  const [variant, changeVariant] = useState<string>(NoteVariant.STICKY);
  const [text, changeText] = useState<string>("");
  const [title, changeTitle] = useState<string>("");
  const [description, changeDescription] = useState<string>('');

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
              starsHandler.starActions.createFromNote(title, description, 0, 0, {
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
