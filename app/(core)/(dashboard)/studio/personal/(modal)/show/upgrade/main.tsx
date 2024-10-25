import { CustomisableModal } from '@/components/modal/general/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';

export function SpacesPersonalShowNoticeModal() {
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal></CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
