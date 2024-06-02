import { ModalOverlay } from '../(common)/overlay/main';
import { ModalContainerWrapper } from '../(common)/wrapper/main';
import { FeltModalCloseButton } from './close-button/main';
import { FeltModalContainer } from './container/main';

interface FeltModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export function FeltModal({ children, isOpen, onClose }: FeltModalProps) {
  return (
    <ModalOverlay isOpen={isOpen} onClick={() => onClose()}>
      <ModalContainerWrapper>
        <FeltModalContainer>{children}</FeltModalContainer>
        <FeltModalCloseButton onClick={() => onClose()}>FLIP ME</FeltModalCloseButton>
      </ModalContainerWrapper>
    </ModalOverlay>
  );
}
