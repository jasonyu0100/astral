export function ModalContainerBlurWrapper({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='z-40 flex h-full w-full flex-col items-center justify-center  bg-black bg-opacity-10 backdrop-blur-md'>
      {children}
    </div>
  );
}
