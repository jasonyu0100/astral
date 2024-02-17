import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { StarModalContext } from '../main';
import { DraftContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/page';
import { LinkObj, LinkVariant } from '@/(ouros)/(model)/resource/link/main';

export function AddLinkStarModal() {
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addLinkStarModal;
  const { starHandler } = useContext(DraftContext);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Link Element</FormTitle>
        <FormBody>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              starHandler.queryCreateLinkStar("hello", 0, 0, {
                id: '0',
                title: 'passion.png',
                url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
                variant: LinkVariant.YOUTUBE,
              } as LinkObj);
              close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}

