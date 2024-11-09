import { AstralModal } from '@/components/modal/astral/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';

export function HomePersonalShowNoticeModal() {
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal></AstralModal>
    </ContextForOpenable.Provider>
  );
}
