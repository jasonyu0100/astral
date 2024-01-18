export function ModalContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white h-3/4 aspect-[13/16] p-[30px]">
        {children}
    </div>
  );
}
