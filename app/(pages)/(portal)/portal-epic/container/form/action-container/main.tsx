export function PortalFormActionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col space-y-[1rem] w-full mt-auto">
      {children}
    </div>
  );
}
