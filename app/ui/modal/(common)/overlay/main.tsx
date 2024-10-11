import { cn } from '@/utils/cn';

export function ModalOverlay({
  children,
  onClose,
  isOpen,
}: {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: any;
}) {
  return (
    <div
      id='ModalOverlay'
      className={cn(
        'fixed inset-0 z-40 flex h-screen w-screen items-center justify-center',
        {
          hidden: !isOpen,
        },
      )}
      style={{ marginTop: '0px', marginBottom: '0px' }}
      onClick={onClose}
    >
      {children}
    </div>
  );
}
