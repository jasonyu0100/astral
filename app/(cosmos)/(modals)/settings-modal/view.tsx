import { useContext } from 'react';
import { SettingsModal } from './settings/main';
import { SettingsModalContext } from './main';

export function SettingsModalView() {
  const modalContext = useContext(SettingsModalContext);

  return <>{modalContext.settingsModal.opened && <SettingsModal />}</>;
}
