import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { ModalOverlay } from '../(common)/overlay/main';
import { ModalContainerWrapper } from '../(common)/wrapper/main';

interface PolaroidModalProps {
  children?: React.ReactNode;
}

export function CustomisableModal({ children }: PolaroidModalProps) {
  const openableController = useContext(ContextForOpenable);

  return (
    <ModalOverlay
      isOpen={openableController.opened}
      onClose={openableController.close}
    >
      <ModalContainerWrapper>{children}</ModalContainerWrapper>
    </ModalOverlay>
  );
}
