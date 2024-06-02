import { PolaroidModalCloseButton } from './close-button/main';
import { ModalOverlay } from '../(common)/overlay/main';
import { PolaroidModalContainer } from './container/main';
import { ModalContainerWrapper } from '../(common)/wrapper/main';

interface PolaroidModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export function PolaroidModal({ children, isOpen, onClose }: PolaroidModalProps) {
  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <ModalContainerWrapper>
        <PolaroidModalContainer>{children}</PolaroidModalContainer>
        <PolaroidModalCloseButton onClick={onClose}>FLIP ME</PolaroidModalCloseButton>
      </ModalContainerWrapper>
    </ModalOverlay>
  );
}
