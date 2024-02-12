import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { SettingsModalContext } from '../main';
import { useGlobalUser } from '@/state/main';

export function SettingsModal() {
  const user = useGlobalUser((state) => state.user)
  const modalContext = useContext(SettingsModalContext);
  const { opened, close } = modalContext.settingsModal;

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Edit Settings</FormTitle>
        <FormBody>
          <h1>EDIT Settings</h1>
          <a href={`https://buy.stripe.com/test_8wM5kubDgdlT6ru001?prefilled_email=${user.email}`} target="_blank">Standard</a>
          <a href='https://buy.stripe.com/test_3cs4gqdLo81z4jm288' target='_blank'>PRO</a>
          <a href="https://billing.stripe.com/p/login/test_14k7t58n16OU25OcMM" target='_blank'>BILLING</a>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
