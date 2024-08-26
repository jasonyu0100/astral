export function ModalContainerWrapper({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='z-50 flex h-full w-full flex-col items-center justify-center'>
      {children}
    </div>
  );
}
