export function ModalContainerBlurWrapper({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='z-40 flex h-full w-full flex-col items-center justify-center  bg-slate-300 bg-opacity-10 backdrop-blur-sm'>
      {children}
    </div>
  );
}
