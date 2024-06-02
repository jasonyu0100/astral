import { ModalCloseButton } from './close-button/main';
import { ModalOverlay } from './overlay/main';
import { ModalContainer } from './container/main';
import { ModalContainerWrapper } from './wrapper/main';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <PolaroidModalOverlay isOpen={isOpen} onClick={() => onClose()}>
      <PolaroidModalContainerWrapper>
        <PolaroidModalContainer>{children}</ModalContainer>
        <PolaroidModalCloseButton onClick={() => onClose()}>FLIP ME</ModalCloseButton>
      </ModalContainerWrapper>
    </ModalOverlay>
  );
}
