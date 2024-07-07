import { cn } from '@/(utils)/cn';

export function ModalOverlay({
  children,
  onClick,
  isOpen,
}: {
  children?: React.ReactNode;
  isOpen: boolean;
  onClick: any;
}) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex h-screen w-screen items-center justify-center',
        {
          hidden: !isOpen,
        },
      )}
      style={{ marginTop: '0px', marginBottom: '0px' }}
      onClick={onClick}
    >
      <div className='fixed inset-0 flex items-center justify-center bg-slate-100 bg-opacity-80'>
        <div
          className='h-full w-full'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
