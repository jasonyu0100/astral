import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { ModalOverlay } from '../(common)/overlay/main';
import { ModalContainerLightWrapper } from '../(common)/wrapper/light/main';

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
      <ModalContainerLightWrapper>{children}</ModalContainerLightWrapper>
    </ModalOverlay>
  );
}
