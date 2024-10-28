import { AstralModal } from '@/components/modal/astral/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext } from 'react';

export function UserChatModal() {
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal></AstralModal>
    </ContextForOpenable.Provider>
  );
}
