export function ModalContainerDarkWrapper({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='z-40 flex h-full w-full flex-col items-center justify-center  bg-slate-950 bg-opacity-80 backdrop-blur-md'>
      {children}
    </div>
  );
}
