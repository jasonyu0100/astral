export function CartSidebarHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center flex-shrink-0 w-full pys-[1rem] justify-between px-[1rem]">
      {children}
    </div>
  );
}
