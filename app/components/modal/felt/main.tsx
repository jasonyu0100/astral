import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { ModalOverlay } from '../(common)/overlay/main';
import { ModalContainerDarkWrapper } from '../(common)/wrapper/dark/main';
import { FeltModalCloseButton } from './close-button/main';
import { FeltModalContainer } from './container/main';

interface FeltModalProps {
  children?: React.ReactNode;
}

export function FeltModal({ children }: FeltModalProps) {
  const openableController = useContext(ContextForOpenable);

  return (
    <ModalOverlay
      isOpen={openableController.opened}
      onClose={openableController.close}
    >
      <ModalContainerDarkWrapper>
        <FeltModalContainer>{children}</FeltModalContainer>
        <FeltModalCloseButton onClick={openableController.close}>
          FLIP ME
        </FeltModalCloseButton>
      </ModalContainerDarkWrapper>
    </ModalOverlay>
  );
}
