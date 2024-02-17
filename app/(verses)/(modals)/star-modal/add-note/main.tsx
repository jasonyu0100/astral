import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { StarModalContext } from '../main';
import { DraftContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/page';
import { NoteObj, NoteVariant } from '@/(ouros)/(model)/resource/note/main';

export function AddNoteStarModal() {
  const { starHandler } = useContext(DraftContext);
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addNoteStarModal;

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Note Element</FormTitle>
        <FormBody>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              close();
              starHandler.queryCreateNoteStar("hello", 0, 0, {
                id: crypto.randomUUID(),
                title: "hello",
                text: "hello",
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
