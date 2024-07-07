export function ModalContainerWrapper({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='z-50 flex h-full w-full flex-col items-center justify-center  bg-slate-100 bg-opacity-80'>
      {children}
    </div>
  );
}
