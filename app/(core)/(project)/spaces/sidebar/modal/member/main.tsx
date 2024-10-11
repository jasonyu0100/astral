import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { FormContainer } from '@/ui/form/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext } from 'react';

export function SpacesSidebarAddMemberModal() {
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer></FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
