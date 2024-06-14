import { PolaroidModalCloseButton } from './close-button/main';
import { ModalOverlay } from '../(common)/overlay/main';
import { PolaroidModalContainer } from './container/main';
import { ModalContainerWrapper } from '../(common)/wrapper/main';
import { useContext } from 'react';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';

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
