import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { ModalOverlay } from '../(common)/overlay/main';
import { ModalContainerBlurWrapper } from '../(common)/wrapper/light/main';

interface PolaroidModalProps {
  children?: React.ReactNode;
}

export function AstralModal({ children }: PolaroidModalProps) {
  const openableController = useContext(ContextForOpenable);

  return (
    <ModalOverlay
      isOpen={openableController.opened}
      onClose={openableController.close}
    >
      <ModalContainerBlurWrapper>{children}</ModalContainerBlurWrapper>
    </ModalOverlay>
  );
}
