import clsx from 'clsx';

export function ModalOverlay({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  return (
    <div
      className={clsx(
        'fixed inset-0 flex justify-center items-center p-[3rem] z-50',
        {
          hidden: !isOpen,
        },
      )}
    >
      <div className='fixed inset-0 bg-slate-950 opacity-50'></div>
      {children}
    </div>
  );
}
