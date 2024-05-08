import { cn } from '@/(utils)/cn';

export function ModalOverlay({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  return (
    <div
      className={cn('fixed inset-0 z-50 flex items-center justify-center', {
        hidden: !isOpen,
      })}
      style={{ marginTop: '0px', marginBottom: '0px' }}
    >
      <div className='fixed inset-0 bg-slate-950 opacity-50'></div>
      {children}
    </div>
  );
}
