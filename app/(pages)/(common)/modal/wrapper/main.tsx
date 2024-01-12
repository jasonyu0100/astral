export function ModalContainerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center  z-50 ">
      {children}
    </div>
  );
}
