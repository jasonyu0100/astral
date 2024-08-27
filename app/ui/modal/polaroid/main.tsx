import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { ModalOverlay } from '../(common)/overlay/main';
import { ModalContainerWrapper } from '../(common)/wrapper/main';
import { PolaroidModalCloseButton } from './close-button/main';
import { PolaroidModalContainer } from './container/main';

interface PolaroidModalProps {
  children?: React.ReactNode;
}

export function PolaroidModal({ children }: PolaroidModalProps) {
  const openableController = useContext(ContextForOpenable);

  return (
    <ModalOverlay
      isOpen={openableController.opened}
      onClose={openableController.close}
    >
      <ModalContainerWrapper>
        <PolaroidModalContainer>{children}</PolaroidModalContainer>
        <PolaroidModalCloseButton onClick={openableController.close}>
          FLIP ME
        </PolaroidModalCloseButton>
      </ModalContainerWrapper>
    </ModalOverlay>
  );
}
