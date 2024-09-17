import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { useContext } from 'react';

export function SidebarUserChatModal() {
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal></CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
